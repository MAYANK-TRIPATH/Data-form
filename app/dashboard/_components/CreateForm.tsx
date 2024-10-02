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




const PROMPT = "On the basis of Description please give me form in json format with the form title, form subtitle and with form having Form Field, form name, placeholder name, and form label, field type, field required in json format"

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
