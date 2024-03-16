import React, { useState } from 'react';
import Question from '../Question/Question';
import './index.css'

const QuestionContainer = ({children}) => {
    const [radius, setRadius] = useState(40);
  
    return (
      <Box>
      <React.Fragment key=".0">
        <Block>
          <Notification color="info">
            
          </Notification>
        </Block>
        </React.Fragment>
        </Box>
    );
};

export default QuestionContainer;