import styled from "styled-components";

export const TrasactionsContainer = styled.main`
    widht:100%;
    max-widht:1128px;
    margin:4 auto 0 ;
    padding: 0 1.5rem:


`;

export const TrasactionsTable = styled.table`
    widht: 100%
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    
    td { 
        padding:1.25rem 2rem;
        background:${props => props.theme["gray-700"]};

        &:first-child{
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
         
     }
        &:last-child{
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
         
     }
    }

`;

interface PriceHighLightProps{
    variant: 'incone' | 'outcone';
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
 color: ${props => props.variant == 'incone' ? props.theme['green-300'] : props.theme['red-300']};
`;