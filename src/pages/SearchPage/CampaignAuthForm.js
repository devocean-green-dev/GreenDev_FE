import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../data/User";
import axios from "axios";
import "../../styles/SearchPage/CampaignAuthForm.scss";

const CampaignAuthForm = () => {
  const { campaignId } = useParams();
  const [postData, setPostData] = useState({
    date: "",
    content: "",
    postImage: "",
  });
  const token = useRecoilValue(accessTokenState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 추후 date 형식 변경 예정
    // if (name === "date") {
    //   const modifiedDate = `${value}T00:00:00`;
    //   setPostData((prevPostData) => ({
    //     ...prevPostData,
    //     [name]: modifiedDate,
    //   }));
    // } else {
    setPostData((prevPostData) => ({
      ...prevPostData,
      [name]: value,
    }));
    // }
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
        setPostData((prevFormData) => ({
          ...prevFormData,
          postImage: response.data.data.uploadFileUrl,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // api post 추가
    try {
      await axios.post(
        `https://greendev-api.dev-lr.com/campaigns/${campaignId}/posts`,
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("캠페인 등록 데이터 전송 성공!", response);
      alert("캠페인 인증이 등록되었습니다!");
      navigate("/home");
    } catch (error) {
      console.error("캠페인 데이터 전송 실패:", error);
      // console.log(postData);
    }

    setPostData({
      date: "",
      content: "",
      postImage: "",
    });
  };

  return (
    <div className="campaign-auth">
      <form onSubmit={handleSubmit}>
        <button type="submit">등록</button>
        <input
          type="date"
          name="date"
          placeholder="참여날짜"
          value={postData.date}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="캠페인 인증글을 작성해주세요."
          value={postData.content}
          onChange={handleChange}
        />
        <div className="filebox">
          <input
            type="text"
            // defaultValue={postData.postImage ? postData.postImage.name : ""}
            placeholder="캠페인 인증 사진 첨부"
          />
          <label htmlFor="file">파일찾기</label>
          <input
            type="file"
            name="postImage"
            id="file"
            onChange={handleFileChange}
          />
        </div>
        {postData.postImage && (
          <img
            src={postData.postImage}
            alt="Preview"
            style={{
              maxWidth: "200px",
              margin: "0 auto",
              paddingBottom: "10vh",
            }}
          />
        )}
      </form>
    </div>
  );
};

export default CampaignAuthForm;
