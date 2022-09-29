import React from "react";

import {
  render,
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlText,
} from "mjml-react";

export function renderTemplate(job: string) {
  const { html, errors } = render(
    <Mjml>
      <MjmlBody background-color="#F4F4F4">
        <MjmlSection
          background-color="#FFFFFF"
          background-repeat="repeat"
          padding="20px 0"
          text-align="center"
        >
          <MjmlColumn>
            <MjmlImage
              align="center"
              padding="10px 25px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wunderman_thompson_logo.png/640px-Wunderman_thompson_logo.png"
              width="128px"
            ></MjmlImage>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection
          background-color="#ffffff"
          background-repeat="repeat"
          padding="20px 0"
          text-align="center"
        >
          <MjmlColumn>
            <MjmlImage
              align="center"
              padding="10px 25px"
              src="https://media.giphy.com/media/bHUz68NxGoFuzomfSZ/giphy.gif"
              width="600px"
            ></MjmlImage>
            <MjmlImage
              align="center"
              alt="Happy New Year!"
              container-background-color="#ffffff"
              padding="10px 25px"
              src="https://www.picng.com/upload/thank_you/png_thank_you_53982.png"
              width="399px"
            ></MjmlImage>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection
          background-color="#ffffff"
          background-repeat="repeat"
          background-size="auto"
          padding="20px 0px 20px 0px"
          text-align="center"
        >
          <MjmlColumn>
            <MjmlText
              align="center"
              color="#55575d"
              font-family="Arial, sans-serif"
              font-size="14px"
              line-height="28px"
              padding="0px 25px 0px 25px"
            >
              Thank you for applying to the {job} position at Wunderman
              Thompson. We'd like to inform you that we received your
              application. Our hiring team is currently reviewing all
              applications and we are planning to schedule interviews in the
              next two weeks.
            </MjmlText>
            {/* <MjmlImage
              align="center"
              alt="Best wishes from all the Clothes Team!"
              padding="10px 25px"
              src="http://gkq4.mjt.lu/img/gkq4/b/18rxz/1hlv8.png"
              width="142px"
            ></MjmlImage> */}
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection
          background-color="#E661B2"
          background-repeat="repeat"
          padding="20px 0"
          text-align="center"
        ></MjmlSection>
        <MjmlSection
          background-repeat="repeat"
          background-size="auto"
          padding="20px 0px 20px 0px"
          text-align="center"
        >
          <MjmlColumn>
            <MjmlText
              align="center"
              color="#55575d"
              font-family="Arial, sans-serif"
              font-size="11px"
              line-height="22px"
              padding="0px 20px"
            >
              [[DELIVERY_INFO]]
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );

  return html;
}
