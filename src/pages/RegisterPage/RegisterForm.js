// 캠페인 등록 폼
import "../../styles/RegisterPage/RegisterForm.scss";
import React, { useState } from "react";
// import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    content: "",
    file: null,
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // 등록 폼 데이터 서버로 전달해주기
    // try {
    //   await axios.post("api 주소", formData);
    //   console.log("캠페인 등록 데이터 전송 성공!");
    // } catch (error) {
    //   console.error("캠페인 데이터 전송 실패:", error);
    // }

    setFormData({
      title: "",
      date: "",
      content: "",
      file: null,
      category: "",
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
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="날짜"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="내용을 입력하세요."
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <div className="filebox">
          <input
            type="text"
            value={formData.file ? formData.file.name : ""}
            placeholder="사진 첨부"
          />
          <label for="file">파일찾기</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleFileChange}
            // onChange={(e) =>
            //   setFormData({ ...formData, file: e.target.files[0] })
            // }
          />
        </div>
        {/* <input type="file" placeholder="사진 첨부" /> */}
        <input
          type="text"
          name="category"
          placeholder="카테고리"
          value={formData.category}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default RegisterForm;
