import styled from '@emotion/styled';

export const PluginLayout = styled.div<{ singleCondition?: boolean }>`
  display: grid;
  gap: 16px;

  grid-template: ${({ singleCondition }) =>
    singleCondition
      ? `'content banner' minmax(600px, 1fr) 'footer footer' auto/1fr 300px`
      : `'sidebar content' minmax(600px, 1fr) 'footer footer' auto/300px 1fr`};

  @media (min-width: 1520px) {
    grid-template: ${({ singleCondition }) =>
      singleCondition
        ? `'content banner' minmax(600px, 1fr) 'footer footer' auto/1fr 300px`
        : `'sidebar content banner' minmax(600px, 1fr) 'footer footer footer' auto/300px 1fr 300px`};
  }
`;
