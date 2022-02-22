import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const Icon = styled.img`
  position: absolute;
  top: 7px;
  left: 12px;
  width: 27px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  font-size: 22px;
  text-shadow: 0 0 2px #fff;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  text-shadow: 0 0 3px #9cc9e3;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
  margin-bottom: 7px;
`;

export const Hr = styled.hr`
  width: 80px;
  height: 3px;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 30px;
  color: #e4e6e7;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  margin-bottom: 20px;
  @media only screen (max-width: 620px) {
    padding: 10px;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  position: relative;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 1rem 1.5rem;
  padding-left: 48px;
  background: ${({ alt }) =>
    alt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  border-radius: 15px;
  transition: 0.5s;
  margin-left: 14px;
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.9rem;
`;
