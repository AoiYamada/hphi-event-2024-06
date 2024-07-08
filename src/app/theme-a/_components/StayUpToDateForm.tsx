"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z
    .string()
    .email({
      message: "電郵地址無效",
    })
    .max(200, {
      message: "電郵地址過長 (>200字)",
    }),
});

const StayUpToDateForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
        className: "bg-primary text-white border-none",
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
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <label htmlFor="email">Stay up to date</label>
        <div className="relative">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="h-7 w-48 rounded-md bg-[#515B60] p-2 text-xs font-light leading-3 text-[#D9DBE1] placeholder:text-gray-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            className="absolute right-0 top-0 flex h-7 w-7 flex-row items-center justify-center"
            type="submit"
          >
            <Send size={12} />
          </button>
        </div>
      </form>
    </Form>
  );
};

export default StayUpToDateForm;
