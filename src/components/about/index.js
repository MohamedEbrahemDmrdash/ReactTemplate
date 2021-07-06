import React from "react";
import {Creative,CreativeInfo,InfoTitle,InfoTitleSpan,InfoDir,InfoDesc,StyledLink} from './style.js'
const about = () =>{
    return (
      <Creative>
            <div className="container">
                <CreativeInfo>
                    <InfoTitle><InfoTitleSpan>This is</InfoTitleSpan> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <StyledLink to="#">explicabo</StyledLink> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </Creative>
    )
}

export default about;