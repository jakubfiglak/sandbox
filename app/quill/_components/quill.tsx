"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { z } from "zod";

const quillInput = z.object({
  value: z.any(),
});

type QuillInput = z.infer<typeof quillInput>;

export const Quill = () => {
  const form = useForm<QuillInput>({
    resolver: zodResolver(quillInput),
    defaultValues: {
      value: `<h1>hello</h1>`,
    },
  });

  function onSubmit(values: QuillInput) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <ReactQuill
          theme="snow"
          defaultValue={form.getValues("value")}
          onChange={(_content, _delta, _source, editor) => {
            form.setValue("value", editor.getHTML());
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
