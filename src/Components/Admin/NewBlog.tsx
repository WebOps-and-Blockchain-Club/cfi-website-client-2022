/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  BlogStatus,
  CreateBlogInput,
  EditBlogInput,
  refetchGetBlogQuery,
  useCreateBlogMutation,
  useEditBlogMutation,
  useGetBlogQuery,
  useUpdateBlogStatusMutation,
} from "../../generated/graphql";
import BlogForm from "../Form/BlogForm";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";

interface Probs {}

const NewBlog = (probs: Probs) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // CREATE BLOG MUTATION
  const [
    createBlogMutation,
    { loading: createBlogLoading, error: createBlogError },
  ] = useCreateBlogMutation({
    onCompleted(data) {
      setSearchParams({ id: data.createBlog.id });
    },
  });

  // EDIT BLOG MUTATION
  const [
    editBlogMutation,
    { data: editBlogData, loading: editBlogLoading, error: editBlogError },
  ] = useEditBlogMutation();

  // UPDATE BLOG STATUS MUTATION
  const [
    updateBlogStatusMutation,
    {
      data: updateBlogStatusData,
      loading: updateBlogStatusLoading,
      error: updateBlogStatusError,
    },
  ] = useUpdateBlogStatusMutation();

  // GET BLOG QUERY
  const {
    data: getBlogData,
    loading: getBlogLoading,
    error: getBlogError,
  } = useGetBlogQuery({
    variables: {
      blogId: searchParams.get("id")!,
    },
    skip: !searchParams.get("id"),
  });

  // SAVE AS DRAFT FUNCTION HANDLER
  const handleDraft = async (data: CreateBlogInput | EditBlogInput) => {
    console.log(JSON.stringify(data));
    try {
      if (searchParams.get("id"))
        await editBlogMutation({
          variables: {
            editBlogBlogId: searchParams.get("id")!,
            editBlogInput: data,
          },
          refetchQueries: [
            refetchGetBlogQuery({ blogId: searchParams.get("id")! }),
          ],
        });
      else
        await createBlogMutation({
          variables: {
            createBlogInput: data as CreateBlogInput,
          },
        });
    } catch (e) {
      console.log(e);
    }
  };

  // PREVIEW FUNCTION HANDLER
  const handlePreview = () => {
    if (searchParams.get("id")) navigate(`/blog/${searchParams.get("id")}`);
    else navigate(`/blog`);
  };

  // SUBMIT FUNCTION HANDLER
  const handleSubmit = async () => {
    try {
      await updateBlogStatusMutation({
        variables: {
          blogStatus: BlogStatus.Pending,
          updateBlogStatusBlogId: searchParams.get("id")!,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CustomBox>
      <CustomGridPage>
        <BlogForm handleDraft={handleDraft} />
      </CustomGridPage>
    </CustomBox>
  );
};

export default NewBlog;
