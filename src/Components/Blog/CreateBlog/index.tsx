import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
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
import AuthContext from "../../../Utils/context";
import { RoleAccess } from "../../../Utils/config";

interface Probs {}

const NewBlog = (probs: Probs) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state } = useContext(AuthContext)!;

  const [errorMessage, setErrorMessage] = React.useState<string>();
  const [viewDraft, setViewDraft] = React.useState<boolean>(false);

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
    setViewDraft(true);
    await handleCreateBlog(value, status, tagIds);
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

  const successCB = () => {
    if (viewDraft || createData?.createBlog.status === BlogStatus.Pending) {
      if (RoleAccess.BlogAdminAccess.includes(state.user.role))
        window.open(`/admin/blog/${createData?.createBlog.id}`, "_blank");
      else window.open(`/blog/${createData?.createBlog.id}`, "_blank");
    } else if (createData?.createBlog.status === BlogStatus.Draft) {
      setSearchParams({ id: createData?.createBlog.id! });
    } else return null;
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
            callBack={successCB}
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
