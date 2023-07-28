import { useState } from "react";
import "../../styles/SearchPage/CampaignAuthForm.scss";

const CampaignAuthForm = () => {
  const [postData, setPostData] = useState({
    nickname: "",
    content: "",
    postImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevPostData) => ({
      ...prevPostData,
      [name]: value,
    }));
  };

  const handlePostImageChange = (e) => {
    const postImage = e.target.files[0];
    setPostData({ ...postData, postImage });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 인증글이 등록되면 현재 시간 받아와 postData에 추가되도록
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();

    setPostData((prevFormData) => ({
      ...prevFormData,
      date: formattedDate,
    }));

    console.log(postData);

    setPostData({
      nickname: "",
      content: "",
      postImage: null,
    });
  };

  return (
    <div className="campaign-auth">
      <form onSubmit={handleSubmit}>
        <button type="submit">등록</button>
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={postData.nickname}
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
            defaultValue={postData.postImage ? postData.postImage.name : ""}
            placeholder="캠페인 인증 사진 첨부"
          />
          <label htmlFor="file">파일찾기</label>
          <input
            type="file"
            name="postImage"
            id="file"
            onChange={handlePostImageChange}
          />
        </div>
      </form>
    </div>
  );
};

export default CampaignAuthForm;
