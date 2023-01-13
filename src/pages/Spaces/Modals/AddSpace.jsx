import { Formik } from "formik";
import React from "react";
import { ReusableModal } from "../../../components/ReusableModal";
import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useMutation } from "react-query";
import { postData } from "../../../api/methods";
import api from "../../../api/api";
import { useSnackbar } from "notistack";

const AddSpace = ({ open, handleClose, title, width }) => {
  const { enqueueSnackbar } = useSnackbar();

  // Add Space Mutation
  const addSpace = useMutation(
    (data) => {
      return postData({ url: api.ADD_SPACE, body: data });
    },
    {
      onSuccess: (data) => {
        handleClose();
        enqueueSnackbar("Successfully added space", {
          variant: "success",
        });
      },
      onError: (error) => {
        enqueueSnackbar("Error occured when adding product", {
          variant: "error",
        });
      },
    }
  );

  const validationSchema = yup.object({
    name: yup.string().required("Space name is required"),
  });

  const onFinish = (values, actions) => {
    addSpace.mutate(values);
    actions.setSubmitting(false);
  };

  return (
    <ReusableModal
      open={open}
      handleClose={handleClose}
      title={title}
      width={width}
    >
      {/* Add Space Fields */}
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onFinish}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              label="Space Name"
              name="name"
              onChange={handleChange}
              value={values.name}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            {/* Buttons */}
            <Box
              sx={{
                marginTop: "15px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="text"
                onClick={handleClose}
                sx={{ marginRight: "10px" }}
              >
                Cancel
              </Button>
              <LoadingButton
                loading={isSubmitting}
                variant="contained"
                type="submit"
              >
                Save
              </LoadingButton>
            </Box>
          </form>
        )}
      </Formik>
    </ReusableModal>
  );
};

export default AddSpace;
