import * as React from 'react';
import { IconButton, Box, Container, Grid, Stack, Tab, Icon} from '@mui/material';
import Image from 'next/image'

export default function Header() {
  return (
    <div className="border-b-4 p-6 align-middle">
      <Container >
        <Grid container spacing={2} sx={{pt: 3}}>
          <svg width="151" height="51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="logo_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="151" height="64">
              <path fill="#fff" d="M0 0h150.943v64H0z"></path>
            </mask>
            <g mask="url(#logo_svg__a)">
              <path
                d="M45.87 37.23L24.71 48.95c-.67.37-1.38.613-2.102.734l.044-13.646.83-.459-7.515-12.23c-1.78-2.895-.75-6.611 2.299-8.3 3.048-1.688 6.962-.71 8.74 2.185l7.516 12.23 4.906-2.717c3.049-1.689 6.962-.71 8.741 2.184 1.779 2.895.75 6.61-2.3 8.3z"
                fill="#CB1C4F"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M24.7 15.046l21.177 11.69c3.051 1.684 4.087 5.399 2.312 8.296-1.774 2.897-5.686 3.88-8.737 2.196l-4.911-2.71-7.496 12.24c-1.774 2.898-5.686 3.881-8.737 2.197-3.051-1.684-4.086-5.398-2.312-8.296l7.496-12.24-5.218-2.88c-3.051-1.685-4.086-5.4-2.312-8.297 1.774-2.897 5.686-3.88 8.737-2.196z"
                    fill="#F87500"></path>
              <path
                d="M73.716 22.566c.116-.644-.403-1.233-1.087-1.233H58.24c-.535 0-.992.366-1.086.869l-.53 2.826c-.122.647.398 1.241 1.085 1.241h6.854l-2.769 15.149c-.118.645.402 1.236 1.087 1.236h3.75c.535 0 .993-.368 1.086-.873l2.835-15.512h1.572c.537 0 .996-.37 1.087-.876l.506-2.827z"
                fill="#CB1C4F"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M97.23 29.07c-.86-1.14-2.416-1.71-4.666-1.71-1.764 0-3.165.423-4.202 1.267l.166-.855h-5.096l-1.645 9.45c-.475 1.238-2.201 1.72-2.695 1.72-.661 0-.992-.285-.992-.855 0-.105.01-.221.033-.348l1.622-8.727c.12-.647-.4-1.24-1.085-1.24h-3.385c-.534 0-.992.367-1.086.87l-1.823 9.825a10.429 10.429 0 00-.133 1.772c0 .654.199 1.276.596 1.867.596.886 1.897 1.329 3.904 1.329 1.324 0 3.218-.884 4.255-1.706l.006-.007-1.196 6.828c-.112.643.406 1.228 1.088 1.228h3.37c.547 0 1.012-.384 1.091-.902l1.053-6.865c.728.949 2.019 1.424 3.871 1.424 1.853 0 3.397-.517 4.632-1.55 1.236-1.055 2.04-2.585 2.416-4.589l.662-3.702a7.88 7.88 0 00.165-1.55c0-1.203-.309-2.194-.926-2.974zm-6.386 9.239c-.53.38-1.103.57-1.72.57-.993 0-1.644-.296-1.953-.887l.993-5.315c.353-.528 1.103-.791 2.25-.791.706 0 1.202.179 1.489.537.286.36.43.697.43 1.013 0 .316-.022.58-.066.791l-.43 2.373c-.133.76-.464 1.329-.993 1.709z"
                    fill="#CB1C4F"></path>
              <path
                d="M74.812 25.01c-.135.652.386 1.26 1.082 1.26h3.672c.515 0 .961-.342 1.075-.822l.671-2.826c.157-.66-.368-1.289-1.075-1.289H76.48c-.527 0-.98.356-1.082.85l-.586 2.826z"
                fill="#CB1C4F"></path>
              <path
                d="M111.41 22.566c.115-.644-.404-1.233-1.087-1.233H95.932c-.534 0-.992.366-1.086.869l-.53 2.826c-.122.647.398 1.241 1.085 1.241h6.854l-2.768 15.149c-.118.645.401 1.236 1.086 1.236h3.75c.535 0 .994-.368 1.086-.873l2.835-15.512h1.572c.537 0 .996-.37 1.087-.876l.507-2.827z"
                fill="#F87500"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M134.923 29.07c-.86-1.14-2.415-1.709-4.665-1.709-1.765 0-3.166.422-4.202 1.266l.165-.855h-5.095l-1.645 9.45c-.476 1.239-2.202 1.72-2.695 1.72-.662 0-.993-.285-.993-.855 0-.105.011-.221.033-.348l1.623-8.727c.12-.647-.4-1.24-1.086-1.24h-3.384c-.535 0-.993.367-1.086.87l-1.824 9.825a10.463 10.463 0 00-.132 1.772c0 .654.198 1.276.595 1.867.596.886 1.897 1.329 3.905 1.329 1.323 0 3.217-.884 4.254-1.706l.006-.007-1.196 6.828c-.112.643.407 1.228 1.088 1.228h3.37c.547 0 1.012-.384 1.091-.902l1.054-6.865c.727.95 2.018 1.424 3.871 1.424 1.853 0 3.397-.517 4.632-1.55 1.235-1.055 2.04-2.585 2.415-4.589l.662-3.702a7.9 7.9 0 00.165-1.55c0-1.202-.308-2.194-.926-2.974zm-6.386 9.239c-.529.38-1.103.57-1.72.57-.993 0-1.644-.296-1.952-.887l.992-5.315c.353-.528 1.103-.791 2.25-.791.706 0 1.202.179 1.489.538.287.358.43.696.43 1.012 0 .316-.022.58-.066.791l-.43 2.373c-.133.76-.463 1.33-.993 1.709z"
                    fill="#F87500"></path>
              <path
                d="M112.505 25.01c-.135.652.387 1.26 1.082 1.26h3.672c.515 0 .962-.341 1.076-.822l.671-2.826c.156-.66-.368-1.289-1.076-1.289h-3.757c-.527 0-.98.356-1.082.85l-.586 2.827z"
                fill="#F87500"></path>
            </g>
          </svg>
          <Box sx={{
            margin:       '0 auto',
            bgcolor:      "#d2d2d2",
            borderRadius: 20,
            height:       "40px",
            width:        600,
            p:            1,
            pl:           3,
            display:      'flex',
          }}>
            <input className="flex-1 bg-transparent border-transparent outline-none"/>
            <IconButton aria-label="Example">
              <Icon>search</Icon>
            </IconButton>
          </Box>
          <Stack direction="row" spacing={4}>
            <Tab label="Home"/>
            <Tab label="Favourite"/>
          </Stack>
        </Grid>
      </Container>
    </div>
  );
}
