"use client"

import FileInput from '@/components/FileInput'
import FormField from '@/components/FormField'
import { useState, ChangeEvent, FormEvent, useEffect  } from 'react';

const Page = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        visibility:'public',
    });
    const [error, setError] = useState<string | null>(null);
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

  return (
    <main className='wrapper-md upload-page'>
        <h1>Upload a video</h1>

        {error && (
            <div className='error-field'>{error}</div>
        )}

        <form className='rounded-20 shadow-20 gap-6 w-full flex flex-col px-5 py-7.5'>
        <FormField 
            id="title"
            label="Title"
            placeholder='Enter a clear title'
            value={formData.title}
            onChange={handleInputChange}
        />
        
        <FormField 
            id="description"
            label="Description"
            placeholder="Describe what this video is about"
            value={formData.description}
            as="textarea"
            onChange={handleInputChange}
        />

        <FormField 
            id="visibility"
            label="Visibility"
            value={formData.visibility}
            as="select"
            options={[
                { label: "Public", value: "public" },
                { label: "Private", value: "private" },
            ]}
            onChange={handleInputChange}
        />


        
        <FileInput />
        </form>
    </main>
  )
}

export default Page