// 돋보기 메뉴(검색) 페이지 - 검색창 및 최신 캠페인 보여주기
import Header from "../../components/Header";
import "../../styles/SearchPage/SearchApp.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CampaignContext } from "../../components/CampaignContext";
import { HeaderContainer } from "../../components/HeaderContainer";

const SearchApp = () => {
  const { campaigns } = useContext(CampaignContext);
  const navigate = useNavigate();
  const goDetailCampaign = (campaignId) => {
    navigate(`/campaigns/${campaignId}`);
  };

  const [searchKeyword, setSearchKeyword] = useState("");
  const searchedCampaigns = campaigns.filter(
    (campaign) =>
      campaign.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      campaign.company.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      campaign.category.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>
      <HeaderContainer>
        <Header menuTitle={"검색"} />
      </HeaderContainer>
      <div className="campaign-container">
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="캠페인 검색"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M12.8203 23.6405C18.7962 23.6405 23.6405 18.7962 23.6405 12.8203C23.6405 6.8443 18.7962 2 12.8203 2C6.8443 2 2 6.8443 2 12.8203C2 18.7962 6.8443 23.6405 12.8203 23.6405Z"
                    stroke="#07683A"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M16.4209 8.58321C15.9486 8.10969 15.3874 7.73417 14.7695 7.47824C14.1515 7.22232 13.4891 7.09103 12.8203 7.09192C12.1515 7.09103 11.4891 7.22232 10.8712 7.47824C10.2533 7.73417 9.69205 8.10969 9.21973 8.58321M20.5995 20.5994L26.0001 26"
                    stroke="#07683A"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="campaign-list-container">
          <h1>캠페인 목록</h1>
          {searchedCampaigns.map((campaign) => (
            <div
              className="campaign-list"
              key={campaign.id}
              onClick={() => goDetailCampaign(campaign.id)}
            >
              <div>
                <h2>{campaign.title}</h2>
                <p>{campaign.company}</p>
                <span>#{campaign.category}</span>
              </div>
              <img src={campaign.imageUrl} alt="campaign img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchApp;
