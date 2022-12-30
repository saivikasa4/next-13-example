import Link from "next/link"
import Editor from "./Create.Editor"

function CreatePost() {
  return (
    <div>
      <Link href="/dashboard" className="text-xs text-blue-500 block mb-2">
        Back to dashboard
      </Link>
      <h1 className="text-xl md:text-3xl font-bold mb-5">Create Post</h1>

      <section>
        <Editor />
      </section>
    </div>
  )
}

export default CreatePost
