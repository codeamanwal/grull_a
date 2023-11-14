/* eslint-disable */
import React, { useEffect } from "react";
import { useState } from "react";
import config from 'react-global-configuration';
import { Button, Checkbox, Form, Input, Select, Tag } from "antd";
import { axiosPost } from "../../utils/services/axios";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const PostJobForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [urls,setSelectedUrls] = useState([]);
  var validUrls = [];
  const urlRegex = /^(?:(?:https?|ftp):)?\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S)?$/;
  const handleChange = (selectedItems) => {
    setSelectedSkills(selectedItems);
  };
  const handleUrlChange=(selectedItems)=>{
    console.log(selectedItems)
    validUrls = selectedItems.filter(validateUrl);
  };
  useEffect(()=>{
    setSelectedUrls(validUrls);
  },[validUrls])
  const validateUrl = (value) => {
    return urlRegex.test(value);
  };
  const onFinish = async (values) => {
   
    try {
      const requestData = {
        "title": values.title,
        "description": values.jobDescription,
        "rate_per_hour": 0,
        "required_skills": selectedSkills,
        "location": values.location,
        "category": values.category,
        "company_name": values.companyName,
        "company_description": values.aboutCompany,
        "duration": 0,
        "reference_files_urls": urls,
      }
      const response = axiosPost('/api/v0/jobs',requestData)
      if(response){
       
        navigate('/myjobs')
      }


    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  const onFinishFailed = (errorInfo) => {
   
  };
  return (
    <div className="flex flex-col flex-wrap  text-white sm:space-y-7 sm:w-3/4 w-full mx-auto font-GeneralSans p-3">
      <p className="text-center sm:text-4xl  text-2xl font-bold font-spaceGrotesk py-4">JOB DESCRIPTION</p>
      <Form
        layout={'vertical'}
        form={form}

        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="grid sm:grid-cols-8 sm:gap-6 gap-3"
        name="basic"
      >
        {/* Title */}
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Please enter the title" }]}
          className="sm:col-span-4 flex flex-col space-y-2 justify-center"
          label="Title"
          
        >
          <Input placeholder="Enter" className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-white sm:text-sm sm:p-4  p-2 sm:w-full"/>
        </Form.Item>

        {/* Add Skills Required */}
        <Form.Item
      name="skills"
      rules={[{ required: true, message: 'Please enter skills' }]}
      className="sm:col-span-4 flex flex-col space-y-2 justify-center"
      label="Add Skills Required"
    >
      <Select
        mode="tags"
        placeholder="Enter"
        onChange={handleChange}
        value={selectedSkills}
        tokenSeparators={[',']}
        className="bg-[#1A0142] border border-solid border-[#B1B1B1]  rounded-lg text-gray-900 sm:text-sm sm:p-3 p-2 sm:w-full postjobsselect"
      >
        {selectedSkills.map((tag, index) => (
          <Option key={index} value={tag} onClose={() => handleChange(selectedSkills.filter(item => item !== tag))} >
          
              {tag}
          
          </Option>
        ))}
      </Select>
    </Form.Item>

        {/* Job Category */}
        <Form.Item
          name="category"
          rules={[{ required: true, message: "Please select the category" }]}
          className="sm:col-span-4 flex flex-col space-y-2 justify-center text-white"
          label={'Job Category'}
        >
            <select
              id="category"
              placeholder="Select"
              className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-white sm:text-sm sm:p-4 p-2 sm:w-full"
            >
              <option value="" disabled selected>Select</option>
              <option value="GRAPHIC_DESIGNER">Graphic Designer</option>
              <option value="ILLUSTRATOR">Illustrator</option>
              <option value="PROGRAMMER">Programmer</option>
              <option value="VIDEO_EDITOR">Video Editor</option>
              <option value="THREE_D_ARTIST">3d artist</option>
              <option value="PRODUCT_DESIGNER">Product Designer</option>
            </select>
        </Form.Item>

        {/* Reference Files */}
        <Form.Item
          name="files"
          rules={[{ required: true, message: "Please upload files" }, { pattern:urlRegex,message:'Please enter a valid url' }]}
          label="Reference Files"
          className="sm:col-span-4 flex flex-col space-y-2 justify-center text-white"
        >
        <Select
        mode="tags"
        placeholder="Enter Urls"
        onChange={handleUrlChange}
        value={urls}
        tokenSeparators={[',']}
        className="bg-[#1A0142] border border-solid border-[#B1B1B1]  rounded-lg text-gray-900 sm:text-sm sm:p-3 p-2 sm:w-full postjobsselect text-white"
      >
        {urls.map((tag, index) => (
          <Option key={index} value={tag} onClose={() => handleChange(urls.filter(item => item !== tag))} >
          
              {tag}
          
          </Option>
        ))}
      </Select>

        </Form.Item>

        {/* Location */}
        <Form.Item
          name="location"
          className="sm:col-span-2 flex  flex-col space-y-2  justify-center"
          label="Location"
        >
          <select
            id="location"
            className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-white sm:text-sm sm:p-4 p-2 sm:w-full"
            placeholder="Select"
          >
            <option value="" disabled selected>Select</option>
            <option value="INDIA">India</option>
            <option value="USA">United States</option>
            <option value="CANADA">Canada</option>
            <option value="ENGLAND">England</option>
            <option value="CHINA">China</option>
            <option value="RUSSIA">Russia</option>
          </select>
        </Form.Item>

        {/* Duration */}
        <Form.Item
          name="duration"
          rules={[{ required: true, message: "Please select duration" }]}
          className="sm:col-span-2 flex  flex-col space-y-2 justify-center"
          label="Duration"
        >
          <select
            id="duration"
            type="text"
            className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-white sm:text-sm sm:p-4  p-2 sm:w-full"
            placeholder="Select"
          >
            <option value="" disabled selected>Select</option>
            <option value="30">30 Days</option>
            <option value="60">60 Days</option>
            <option value="3M">3 Months</option>
            <option value="6M">6 Months</option>
            <option value="1Y">1 Year</option>
          </select>
        </Form.Item>

        {/* Company Name */}
        <Form.Item
          name="companyName"
          className="sm:col-span-4 flex flex-col space-y-2 justify-center"
          label="Company Name (optional)"
        >
          <input
            id="companyName"
            className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-white sm:text-sm sm:p-4 p-2 sm:w-full"
            placeholder="Enter Name"
          />
        </Form.Item>

        {/* Budget */}
        <Form.Item
          name="budget"
          className="sm:col-span-4 flex flex-col space-y-2 justify-center"
          rules={[{ required: true, message: "Please enter budget" }]}
          label="Budget"
        >
          <div className="grid sm:grid-cols-5 grid-cols-3 gap-4">
            <Form.Item
              name="currency"
              className=" sm:col-span-2 flex flex-col space-y-2  justify-center"
            >
              <select
                id="currency"
                className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-white sm:text-sm sm:p-4 p-2 sm:w-full"
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
              </select>
            </Form.Item>

            <Form.Item
              name="budgetValue"
              className="sm:col-span-2 flex flex-col space-y-2  justify-center"
            >
              <input
                id="budgetValue"
                className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-white sm:text-sm sm:p-4 p-2 sm:w-full"
              />
            </Form.Item>

            {/* <div className="sm:col-span-1 flex flex-col space-y-2  justify-center ">
              <label htmlFor="checkbox " className="flex justify-center items-center space-x-2">
                <Checkbox
                  id="checkbox"
                  type="checkbox"
                  className="rounded bg-[#1A0142] text-purple-500 p-2 w-10 h-10"
                />
                <span className="sm:ml-2">NEGOTIABLE</span>
              </label>
            </div> */}
          </div>
        </Form.Item>

        <Form.Item
          name="aboutCompany"
          className="sm:col-span-4 flex flex-col space-y-2 justify-center"
          label=" About Company (optional)"
        >
         
          <textarea
            id="aboutCompany"
            rows="4"
            className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-white sm:text-sm sm:p-4 p-2 sm:w-full"
            placeholder="Type here"
          ></textarea>
        </Form.Item>

        <Form.Item
          name="jobDescription"
          className="sm:col-span-4  flex flex-col space-y-2 justify-center"
          rules={[{ required: true, message: "Please enter job description" }]}
          label="Job Description"
        >
          <textarea
            id="jobDescription"
            rows="4"
            className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-white sm:text-sm sm:p-4 p-2 sm:w-full"
            placeholder="Type here"
          ></textarea>
        </Form.Item>

        <Form.Item
          name="submit"
          className="sm:col-start-8 sm:col-span-2 sm:self-end flex justify-center"
        >
          <button
            className="text-white sm:text-2xl text-base font-semibold p-3 mt-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent sm:py-2 sm:w-full"
            htmlFor="submit"
          >
            POST JOB
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PostJobForm;
