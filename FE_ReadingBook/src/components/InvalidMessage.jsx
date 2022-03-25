import React from "react";
import { Tooltip2 } from "@blueprintjs/popover2";
// import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const InvalidMessage = (message) => (
  <Tooltip2 placement="right" intent="danger" content={message}>
    <FontAwesomeIcon icon={faExclamationCircle} />
  </Tooltip2>
);

export default InvalidMessage;

// const ErrorIcon = styled(FontAwesomeIcon)`
//   ${({ theme }) => css`
//     margin-left: 0.5rem;
//     color: ${theme.colors.error};
//   `}
// `;
