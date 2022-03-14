import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  border-bottom: 5px solid var(--primary-color);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 1.25rem;
  padding-bottom: 1.25rem;

  img {
    max-width: 150px;
  }
`;
