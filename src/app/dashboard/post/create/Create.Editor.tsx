"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Text from "@tiptap/extension-text"
import Document from "@tiptap/extension-document"
import Paragraph from "@tiptap/extension-paragraph"
import { createPost } from "./Create.helpers"
import { useRouter } from "next/navigation"
import { useState } from "react"

function Editor() {
  const router = useRouter()
  const [title, setTitle] = useState<string>("")

  const editor = useEditor({
    extensions: [StarterKit, Document, Paragraph, Text],
    content: "Let's get started",
    editorProps: {
      attributes: {
        class: "pb-10 focus:outline-gray-100 rounded-xl p-4",
      },
    },
  })

  async function savePost() {
    const status = await createPost("Untitled", editor?.getHTML() ?? "")

    if (status === 200) {
      router.push("/dashboard")
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Untitled"
        onChange={(e) => setTitle(e.target.value)}
        className="outline-none mb-4 text-2xl font-semibold"
      />

      <EditorContent editor={editor} className="mb-10 border rounded-xl" />

      <button
        onClick={savePost}
        className="border border-blue-500 text-blue-500 text-xs dark:text-dark rounded-xl py-2 px-6 font-medium hover:bg-blue-500 hover:text-white"
      >
        Publish
      </button>
    </div>
  )
}

export default Editor
