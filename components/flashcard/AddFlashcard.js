import { Input } from "@material-tailwind/react";
function AddFlashcard() {
    return(
        <div className="flex w-72 flex-col items-end gap-6">
            <Input size="lg" label="Front" />
            <Input size="lg" label="Back" />
      </div>
    )
}

export default AddFlashcard;