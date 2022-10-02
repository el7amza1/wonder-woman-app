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

export function renderAppplicantTemplate(
  firstName: string,
  lastName: string,
  mail: string,
  phone: string,
  job: string
) {
  const { html, errors } = render(
    <Mjml>
      <MjmlBody>
        <MjmlSection>
          <MjmlColumn>
            <MjmlImage
              width="200px"
              src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Wunderman_thompson_logo.png"
              align="left"
            />
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlText
              font-size="30px"
              color="#000"
              font-family="helvetica"
              font-weight="bold"
            >
              New Applicant
            </MjmlText>
            <MjmlText font-size="20px" color="#000" font-family="helvetica">
              New Applicant just applied for {job} position.
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlText
              font-size="15px"
              padding-bottom="30px"
              color="#000"
              font-family="helvetica"
            >
              Name: {firstName} {lastName}
            </MjmlText>
            <MjmlText
              font-size="15px"
              padding-bottom="30px"
              color="#000"
              font-family="helvetica"
            >
              E-mail: {mail}
            </MjmlText>
            <MjmlText
              font-size="15px"
              padding-bottom="30px"
              color="#000"
              font-family="helvetica"
            >
              Phone: {phone}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlText font-size="15px" color="#000" font-family="helvetica">
              For more info kindly check the attached file.
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );

  return html;
}
