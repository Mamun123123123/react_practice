import React, { useRef } from "react";

const Form_Create = () => {
  const formRef = useRef({}); 

  const handleChange = (e) => {
    formRef.current[e.target.name] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formRef.current); 
    alert("User added successfully!");
    e.target.reset(); 
    formRef.current = {};
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96 mb-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add User</h2>

        {[
          "name",
          "email",
          "age",
          "phone",
          "city",
          "country",
          "job",
          "company",
          "hobby",
          "website",
        ].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={`Enter ${field}`}
            className="w-full border p-2 mb-3 rounded"
            onChange={handleChange}
          />
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form_Create;
