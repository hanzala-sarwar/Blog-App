"use client";

import {
  FormEvent,
  startTransition,
  useActionState,
  useState,
} from "react";

import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import "react-quill-new/dist/quill.snow.css";

import { createArticles } from "@/actions/create-article";
import { improveContentAction } from "@/actions/improve-content";

// ✅ Proper TypeScript-safe dynamic import
const ReactQuill = dynamic(
  async () => {
    const quill = await import("react-quill-new");
    return quill.default;
  },
  {
    ssr: false,
  }
);

type FormState = {
  errors: {
    title?: string[];
    category?: string[];
    featuredImage?: string[];
    content?: string[];
    formErrors?: string[];
  };
};

export function CreateArticlePage() {

  const [content, setContent] = useState<string>("");
  const [improving, setImproving] = useState<boolean>(false);

  const [formState, action, isPending] =
    useActionState<FormState, FormData>(
      createArticles,
      {
        errors: {},
      }
    );

  // ✨ Improve Content
  const improveContent = async (): Promise<void> => {

    if (!content) return;

    try {
      setImproving(true);

      const result = await improveContentAction(content);

      if (result?.content) {
        setContent(result.content);
      }

    } catch (error) {
      console.log(error);

    } finally {
      setImproving(false);
    }
  };

  // 🚀 Submit Form
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {

    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.append("content", content);

    startTransition(() => {
      action(formData);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <Card>

        <CardHeader>
          <CardTitle className="text-2xl">
            Create New Article
          </CardTitle>
        </CardHeader>

        <CardContent>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Title */}
            <div className="space-y-2">

              <Label htmlFor="title">
                Article Title
              </Label>

              <Input
                id="title"
                name="title"
                placeholder="Enter article title"
              />

              {formState.errors.title && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.title[0]}
                </span>
              )}

            </div>

            {/* Category */}
            <div className="space-y-2">

              <Label htmlFor="category">
                Category
              </Label>

              <select
                id="category"
                name="category"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >

                <option value="">
                  Select Category
                </option>

                <option value="technology">
                  Technology
                </option>

                <option value="programming">
                  Programming
                </option>

                <option value="web-development">
                  Web Development
                </option>

              </select>

              {formState.errors.category && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.category[0]}
                </span>
              )}

            </div>

            {/* Featured Image */}
            <div className="space-y-2">

              <Label htmlFor="featuredImage">
                Featured Image
              </Label>

              <Input
                id="featuredImage"
                name="featuredImage"
                type="file"
                accept="image/*"
              />

              {formState.errors.featuredImage && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.featuredImage[0]}
                </span>
              )}

            </div>

            {/* Content */}
            <div className="space-y-2">

              <Label>
                Content
              </Label>

              <ReactQuill
                theme="snow"
                value={content}
                onChange={(value: string) => setContent(value)}
              />

              {formState.errors.content && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.content[0]}
                </span>
              )}

            </div>

            {/* Form Errors */}
            {formState.errors.formErrors && (
              <div className="dark:bg-transparent bg-red-100 p-2 border border-red-600">

                <span className="font-medium text-sm text-red-500">
                  {formState.errors.formErrors[0]}
                </span>

              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-end gap-4">

              <Button
                type="button"
                variant="outline"
              >
                Cancel
              </Button>

              <Button
                type="button"
                onClick={improveContent}
                disabled={improving}
                
              >
                {improving
                  ? "Improving..."
                  : "✨ Improve with AI"}
              </Button>

              <Button
                disabled={isPending}
                type="submit"
              >
                {isPending
                  ? "Loading..."
                  : "Publish Article"}
              </Button>

            </div>

          </form>

        </CardContent>

      </Card>

    </div>
  );
} 