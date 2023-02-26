import styled from 'styled-components'

const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 400px;
    max-height: 400px;
    display: block;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-50);
    text-decoration: underline;
    text-transform: capitalize;
  }
`

export default Wrapper