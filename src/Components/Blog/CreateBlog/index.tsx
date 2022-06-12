import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  BlogStatus,
  CreateBlogInput,
  refetchGetBlogQuery,
  refetchGetBlogsQuery,
  refetchGetMeBlogsQuery,
  useCreateBlogMutation,
  useGetBlogQuery,
} from "../../../generated/graphql";
import BlogForm from "./BlogForm";
import CustomBox, { CustomGridPage } from "../../Shared/CustomBox";
import ErrorDialog from "../../Shared/Dialog/ErrorDialog";
import Loading from "../../Shared/Dialog/Loading";
import SuccessDialog from "../../Shared/Dialog/SuccessDialog";

interface Probs {}

const NewBlog = (probs: Probs) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = React.useState<string>();

  // GET BLOG QUERY
  const { data, loading, error } = useGetBlogQuery({
    variables: {
      blogId: searchParams.get("id")!,
    },
    skip: !searchParams.get("id"),
  });

  // CREATE BLOG MUTATION
  const [
    createBlogMutation,
    { data: createData, loading: createLoading, error: createError },
  ] = useCreateBlogMutation({
    onCompleted(data) {
      if (data?.createBlog && data?.createBlog.status === BlogStatus.Draft) {
        setSearchParams({ id: data?.createBlog.id });
      } else if (
        data?.createBlog &&
        data?.createBlog.status === BlogStatus.Pending
      ) {
        navigate(`/blog/${data?.createBlog.id}`);
      }
    },
    refetchQueries: [
      refetchGetMeBlogsQuery(),
      refetchGetBlogsQuery(),
      refetchGetBlogQuery({ blogId: data?.getBlog?.id! }),
    ],
  });

  // PREVIEW FUNCTION HANDLER
  const handleSaveAndPreview = async (
    value: Partial<CreateBlogInput>,
    status: BlogStatus,
    tagIds: string[]
  ) => {
    await handleCreateBlog(value, status, tagIds);
    if (searchParams.get("id")) navigate(`/blog/${searchParams.get("id")}`);
    else setErrorMessage("Fill the minimum details before previewing");
  };

  const handleCreateBlog = async (
    value: Partial<CreateBlogInput>,
    status: BlogStatus,
    tagIds: string[]
  ) => {
    try {
      if (!value || !value.title) {
        setErrorMessage("Enter the title of the project");
      } else if (
        status === BlogStatus.Pending &&
        (!value.title ||
          !value.description ||
          (!value.imageData && !value.imageUrl) ||
          !value.readingTime ||
          !value.content ||
          !value.author ||
          !value.clubId ||
          tagIds.length === 0)
      ) {
        setErrorMessage("Enter all the required fields");
      } else {
        await createBlogMutation({
          variables: {
            createBlogInput: {
              id: searchParams.get("id"),
              title: value.title,
              description: value.description,
              imageData: value.imageData,
              imageUrl: value.imageUrl,
              readingTime: value.readingTime,
              content: value.content,
              author: value.author,
              status,
              clubId: value.clubId,
              tagIds,
            },
          },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    if (error) setErrorMessage("Some Error Occurred");
    if (createError) setErrorMessage("Some Error Occurred");
  }, [error, createError]);

  return (
    <CustomBox>
      <CustomGridPage>
        <Loading loading={!!loading || !!createLoading} />
        <ErrorDialog
          message={errorMessage}
          handleClose={() => setErrorMessage(undefined)}
        />
        {createData?.createBlog.id && (
          <SuccessDialog
            message={
              createData?.createBlog.status === BlogStatus.Pending
                ? "Blog Submitted for Approval"
                : "Draft Saved"
            }
            // callBack={submitCallBack}
          />
        )}
        <BlogForm
          initialValues={data}
          handleCreateBlog={handleCreateBlog}
          handleSaveAndPreview={handleSaveAndPreview}
        />
      </CustomGridPage>
    </CustomBox>
  );
};

export default NewBlog;
