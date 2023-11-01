// 캠페인 등록 폼
import "../../styles/RegisterPage/RegisterForm.scss";
import React, { useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../data/User";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    campaignImageUrl: "",
    category: "",
  });

  const token = useRecoilValue(accessTokenState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "startDate" || name === "endDate") {
      const otherDateName = name === "startDate" ? "endDate" : "startDate";
      const otherDate = formData[otherDateName];

      if (name === "startDate") {
        setFormData((prevFormData) => ({
          ...prevFormData,
          startDate: value,
          date: `${value} ~ ${otherDate}`,
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          endDate: value,
          date: `${otherDate} ~ ${value}`,
        }));
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    try {
      const fileData = new FormData();
      fileData.append("file", file);

      const response = await axios.post(
        "https://greendev-api.dev-lr.com/api/v1/images",
        fileData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        // console.log("성공", response.data.data.uploadFileUrl);
        setFormData((prevFormData) => ({
          ...prevFormData,
          campaignImageUrl: response.data.data.uploadFileUrl,
        }));
      } else {
        console.log("이미지 업로드 실패", response);
      }
    } catch (error) {
      console.error("이미지 업로드 에러", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      await axios.post("https://greendev-api.dev-lr.com/campaigns", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      // console.log("캠페인 등록 데이터 전송 성공!");
      alert("캠페인이 등록되었습니다!");
      navigate("/search");
    } catch (error) {
      console.error("캠페인 데이터 전송 실패:", error);
    }

    setFormData({
      title: "",
      date: "",
      description: "",
      category: "",
      imageUrl: "",
    });
  };

  return (
    <div className="campaign-register">
      <form onSubmit={handleSubmit}>
        <button type="submit">등록</button>
        <input
          type="text"
          name="title"
          placeholder="제목"
          defaultValue={formData.title}
          onChange={handleChange}
          required
        />
        <div className="date-box">
          <label htmlFor="startDate">시작날짜</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            onChange={handleChange}
            required
          />
        </div>
        <div className="date-box">
          <label htmlFor="endDate">종료날짜</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          placeholder="내용을 입력하세요."
          name="description"
          defaultValue={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="카테고리"
          defaultValue={formData.category}
          onChange={handleChange}
        />
        <div className="filebox">
          <input
            type="text"
            // defaultValue={formData.file ? formData.file.name : ""}
            placeholder="사진 첨부"
          />
          <label htmlFor="file">파일찾기</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        {formData.campaignImageUrl && (
          <img
            src={formData.campaignImageUrl}
            alt="Preview"
            style={{ maxWidth: "200px", margin: "0 auto" }} // Set the desired width for the image preview
          />
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
