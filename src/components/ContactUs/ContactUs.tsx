import React from "react";
import {
  Container,
  VStack,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BlockTitle from "../BlockTitle/BlockTitle";
import BlockSubtitle from "../BlockSubtitle/BlockSubtitle";
//@ts-ignore
import Fade from "react-reveal/Fade";

interface FormValues {
  name: string;
  email: string;
  companyName: string;
  comment: string;
}

const ContactUs: React.FC = () => {
  const toast = useToast();
  const initialValues: FormValues = {
    name: "",
    email: "",
    companyName: "",
    comment: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    companyName: Yup.string().required("Company Name is required"),
    // comment is optional, no validation rules
  });

  const handleSubmit = async (values: FormValues, actions: any) => {
    try {
      const body = {
        to: "victor@talentsync.eu",
        subject: "Contact Form Submission",
        text: `Name: ${values.name}\nEmail: ${values.email}\nCompany Name: ${values.companyName}\nComment: ${values.comment}`,
      };
      const res = await fetch(
        "https://um1y024jid.execute-api.eu-north-1.amazonaws.com/Main/sendMailWithMailgun",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (res.status === 200 || res.status === 201) {
        toast({
          title: "Message sent",
          description: "We will get back to you as soon as possible",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        actions.resetForm();
      }
      actions.setSubmitting(false);

      // Handle success - clear form, show success message, etc.
    } catch (error) {
      // Handle errors
      actions.setSubmitting(false);
    }
  };

  return (
    <Container
      maxW="container.lg"
      color="brand.400"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mb={{
        base: 16,
        md: 32,
      }}
    >
      <BlockTitle mb={2}>Or Let Us Contact You</BlockTitle>
      <BlockSubtitle maxW="container.sm" mb={{ base: 4, md: 6 }}>
        Feel free to leave your contact information and we will get back to you
      </BlockSubtitle>
      <Fade bottom>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <VStack h="100%" w="md">
                <Field
                  name="name"
                  as={Input}
                  placeholder="Name"
                  borderRadius="full"
                  borderColor="brand.400"
                />
                <ErrorMessage name="name" component={FormErrorMessage} />

                <Field
                  name="email"
                  as={Input}
                  placeholder="Email"
                  borderRadius="full"
                  borderColor="brand.400"
                />
                <ErrorMessage name="email" component={FormErrorMessage} />

                <Field
                  name="companyName"
                  as={Input}
                  placeholder="Company Name"
                  borderRadius="full"
                  borderColor="brand.400"
                />
                <ErrorMessage name="companyName" component={FormErrorMessage} />

                <Field
                  name="comment"
                  as={Textarea}
                  placeholder="Your Comment"
                  borderRadius="24px"
                  borderColor="brand.400"
                  rows={6}
                />

                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  px={{ base: 4, md: 6 }}
                  fontWeight="bold"
                  py={2}
                  bg="brand.400"
                  color="white"
                  rounded="full"
                  w="full"
                  _hover={{
                    bg: "brand.300",
                    textDecoration: "none",
                  }}
                >
                  Send
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Fade>
    </Container>
  );
};

export default ContactUs;
