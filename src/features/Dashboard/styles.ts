import styled from "styled-components";
import { Link } from "../../components/Link/Link";
import { Entry as DefaultEntry } from "../Entry/Entry";

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Entry = styled(DefaultEntry)`
  max-width: 45rem;
  min-width: 22rem;
`;

export const CreateEntry = styled(Link).attrs(() => ({ variant: "button" }))``;
