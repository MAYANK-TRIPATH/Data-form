"use client";

import { useEffect, useState } from "react";
import { useUser } from '@clerk/nextjs';
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import FormUi from "../_components/FormUi";


export default function EditForm({params}) {
  const {user}  = useUser();
  const [JsonForm, setJsonForm] = useState([]);
  const router = useRouter();

  useEffect(() => {
    user && GetFormData();
  }, [user]);
  const GetFormData = async () => {
    const result = await db.select().from(JsonForms).where(and(
      eq(JsonForms.id, params?.formId),
      eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
    ));
  
    let cleanedJsonForm = result[0].jsonform.replace(/```json|```/g, "").trim();
  
    // Find the position where the actual JSON ends (right after the last closing curly brace `}`)
    const jsonEndIndex = cleanedJsonForm.lastIndexOf('}');
  
    if (jsonEndIndex !== -1) {
      // Extract only the JSON part of the string
      cleanedJsonForm = cleanedJsonForm.slice(0, jsonEndIndex + 1);
      
      try {
        const parsedJson = JSON.parse(cleanedJsonForm);
        console.log("Parsed JSON:", parsedJson);
        setJsonForm(parsedJson);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
      console.error("Error: No valid JSON content found");
    }
  };
  


  return (
    <div className="p-10">
      <h2 className="flex gap-2 items-center my-5 cursor-pointer hover:font-bold"
      onClick={()=> router.back()}>
    <ArrowLeftIcon className="" />
      Back
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 border rounded-lg shadow-md">
        controller
        </div>
        
     
     <div className="md:col-span-2 border rounded-lg p-4 h-screen">
      <FormUi jsonForm={JsonForm} />
    </div>
    </div>
    </div>
  );
}