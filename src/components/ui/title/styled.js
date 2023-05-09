import styled from "styled-components";

const TitleSize = {
    small: "28px",
    medium: "36px",
    big: "44px"
}
const StyledTitle = styled.h1`
  margin: 0;
  ${(props) => {
        const font = TitleSize[props.size || "medium"];
        return `
        font-size: ${font};
        `;
    }}
`;


// .title {
//     font-size: 36px;
// }

// .title--small {
//     font-size: 28px;
// }

// .title--big {
//     font-size: 44px;
// }
// .stars .title {
//     align-self: center;
//     margin: 0;
//     padding-bottom: 64px;
// }

// .stars__article .title--small {
//     align-self: flex-start;
//     padding-bottom: 12px;
// }

export default StyledTitle;