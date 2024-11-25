"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { AiChatSession } from "@/configs/AiModal";
import { JsonForms } from "@/configs/schema";
import { create } from "domain";
import { useUser } from '@clerk/nextjs';
import { db } from "@/configs";
import moment from 'moment';
import { useRouter } from "next/navigation";




const PROMPT = `
Based on the following description, generate a JSON structure for a form. 
The structure should contain the following:

{
  "title": "string",  // Title of the form
  "subtitle": "string",  // Subtitle of the form
  "fields": [
    {
      "name": "string",  // Field name
      "label": "string",  // Field label
      "type": "text | email | number | date | select | checkbox | textarea",  // Field type
      "placeholder": "string",  // Placeholder text
      "required": true/false,  // Is the field required?
      "options": [{"label": "string", "value": "string"}]  // For select type fields
    }
  ]
}

Use this exact format, and generate appropriate field types, labels, and placeholders based on the description.
`;


export default function CreateForm() {

  const [openDialog, setOpenDialog] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState();
  const {user}  = useUser();
  const route = useRouter();

  const onCreateForm = async() => {
   //   console.log(userInput);
      setLoading(true);
      setOpenDialog(false); 

      const result = await AiChatSession.sendMessage("Desription"+userInput+PROMPT);
      console.log(result.response.text());
      if(result.response.text())
      {
        const resp = await db.insert(JsonForms)
        .values({
            jsonform: result.response.text(),
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format("DD/MM/YYYY"),
            
        }).returning({id:JsonForms.id});


        console.log("New Form Id", resp[0].id);
        if(resp[0].id)
        {
            route.push('/edit-form/'+resp[0].id);
        }

        
        setLoading(false);
      }
      setLoading(false);
  };

  return (
    <div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button 
            onClick={() => setOpenDialog(true)} // Open the dialog
            className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'>
            + Create Form
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Form</DialogTitle>
            <DialogDescription>
              <Textarea
                className="my-2"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
              />
              <div className="flex gap-2 my-3 justify-end">
                <Button
                  onClick={() => setOpenDialog(false)} // Close on cancel
                  className="block w-full rounded border border-red-800 bg-red-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                  Cancel
                </Button>
                <Button
                  onClick={onCreateForm} // Create form and close dialog
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                  Create
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}