import React from "react";
import { FullScreenCode } from "mdx-deck";
import styled, { css } from "styled-components";
import * as polished from "polished";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { editorTheme } from "./theme.js";
import scope from "./scope.js";

const StyledFullScreenCode = styled(FullScreenCode)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: ${polished.rem(100)};
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled.div`
  background: whitesmoke;
  font-family: "Source Code Pro", monospace;
  font-size: ${polished.rem(14)};
  height: ${polished.rem(350)};
  max-height: ${polished.rem(350)};
  overflow: auto;
  ${column};
  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  ${column};
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: ${polished.rem(8)};
  background: pink;
  color: ;
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: "Source Code Pro", monospace;
`;

const LiveEdit = ({ noInline, code }) => (
  <StyledFullScreenCode>
    <StyledProvider
      code={code}
      noInline={noInline}
      theme={editorTheme}
      scope={scope}
    >
      <LiveWrapper>
        <StyledEditor>
          <LiveEditor />
        </StyledEditor>
        <StyledPreview />
      </LiveWrapper>

      <StyledError />
    </StyledProvider>
  </StyledFullScreenCode>
);

export default LiveEdit;