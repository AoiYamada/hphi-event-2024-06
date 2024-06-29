"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "名字不能為空",
    })
    .max(100, {
      message: "名字過長 (>100字)",
    }),
  email: z
    .string()
    .email({
      message: "電郵地址無效",
    })
    .max(200, {
      message: "電郵地址過長 (>200字)",
    }),
  phone: z
    .string()
    .min(8, {
      message: "電話號碼無效",
    })
    .max(16, {
      message: "電話號碼過長",
    }),
  subject: z
    .string()
    .min(1, {
      message: "主題不能為空",
    })
    .max(50, {
      message: "主題過長 (>50字)",
    }),
  content: z
    .string()
    .min(1, {
      message: "內容不能為空",
    })
    .max(500, {
      message: "內容太長 (>500字)",
    }),
});

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      toast({
        title: "資料提交成功",
        className: "bg-primary text-base border-none",
      });
    } catch (error) {
      toast({
        title: "資料提交失敗",
        description: "請稍後再試",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full max-w-lg flex-col items-center justify-center gap-2 text-lg"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col items-start justify-between gap-2 md:flex-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="姓名"
                    className="w-full rounded-md border border-neutral/20 p-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="email"
                    placeholder="電郵"
                    className="w-full rounded-md border border-neutral/20 p-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  type="text"
                  placeholder="電話"
                  className="w-full rounded-md border border-neutral/20 p-2"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  type="text"
                  placeholder="主題"
                  className="w-full rounded-md border border-neutral/20 p-2"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Textarea
                  placeholder="內容"
                  className="focus:ring-offset-opacity-50 w-full rounded-md border border-neutral/10 p-2"
                  cols={30}
                  rows={10}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="text-basic mt-6 w-full rounded-md bg-primary p-2"
        >
          提交
        </button>
      </form>
    </Form>
  );
};

export default ContactForm;
