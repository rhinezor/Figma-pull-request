import React, { useState } from 'react';
import { Select, Button } from 'antd';

import styles from './index.module.less';

const LanguageSelection: React.FC = () => {
  const [selectValue, setSelectValue] = useState('');

  const onGETSTARTEDClick = () => {};

  return (
    <div className={styles.containerContent}>
      <img
        alt=""
        src="https://weavefox.alipay.com/assets/2102956f-face-4cca-8511-98647adb5aef.png"
        className={styles.headerImage}
      />
      <span className={styles.welcomeText}>Welcome To Ni De</span>
      <span className={styles.worldProfessional}>Yingwen. The Worlds</span>
      <span className={styles.bestProfessional}>Best Professional</span>
      <span className={styles.learningApp}>Learning APP</span>
      <span className={styles.speakTone}>
        Ready to speak with the right tone,
      </span>
      <span className={styles.rhythmConfidence}>
        <span className={styles.pitchPronunciation}>
          rhythm, and confidence? Wellguide you through every nuance-from pitch
          to pronunciation-to
        </span>
        <span className={styles.nativeConnection}>
          help you connect like a native.Let s turn phrases into fluid
        </span>
      </span>
      <span className={styles.conversationsStep}>
        conversations, one step at a time.
      </span>
      <span className={styles.languageDive}>
        Dive in, and let&apos;s make language
      </span>
      <span className={styles.languageFlow}>flow!</span>
      <div className={styles.selectionContainer}>
        <Select
          size="small"
          defaultValue={[1, 2]}
          mode="multiple"
          options={[
            { value: 1, label: 'nited States' },
            { value: 2, label: 'nglish (' },
          ]}
          placeholder=""
          value={selectValue}
          onChange={e => {
            setSelectValue(e);
          }}
          className={styles.languageSelect}
        />
        <span className={styles.chooseLanguage}>Choose Language For App</span>
      </div>
      <Button
        size="large"
        onClick={onGETSTARTEDClick}
        className={styles.startButton}
      >
        GET STARTED
      </Button>
    </div>
  );
};

export default LanguageSelection;


/*tes2*/
import React from 'react';
import { Button } from 'antd';

import styles from './index.module.less';

const LoginButton: React.FC = () => {
  const onSignUpClick = () => {};

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.buttonContainer}>
        <div className={styles.loginSection}>
          <span className={styles.loginText}>Login</span>
        </div>
        <Button
          shape="round"
          onClick={onSignUpClick}
          className={styles.roundedButton}
        >
          <span className={styles.signButtonText}>Sig</span>
          <span className={styles.upButtonText}>n Up</span>
        </Button>
      </div>
    </div>
  );
};

export default LoginButton;

/*test3*/

import React from 'react';

import styles from './index.module.less';

const ImageContainer: React.FC = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.imageInnerWrapper}>
        <img
          alt=""
          src="https://weavefox.alipay.com/assets/3bdbc5f5-14a1-4eee-91d3-5afdef075aaa.png"
          className={styles.imageDisplay}
        />
      </div>
    </div>
  );
};

export default ImageContainer;


/*test4*/

import React from 'react';

import styles from './index.module.less';

const AccountCreation: React.FC = () => {
  return (
    <div className={styles.accountContainer}>
      <span className={styles.creationMessage}>
        Awesome your accountsbeen created to begin
      </span>
      <span className={styles.swipeInstruction}>Swipe left.</span>
      <img
        alt=""
        src="https://weavefox.alipay.com/assets/af5ccd65-b578-4b10-8c2e-683bf8c16fc4.png"
        className={styles.placeholderImage}
      />
      <div className={styles.emptySection} />
    </div>
  );
};

export default AccountCreation;

/*test5*/

import React from 'react';
import AccountCreation from './components/AccountCreation';
import LanguageSelection from './components/LanguageSelection';

import styles from './index.module.less';

const MyPageComponent: React.FC = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.contentSection}>
        <AccountCreation />
        <LanguageSelection />
      </div>
    </div>
  );
};

export default MyPageComponent;


/*test6*/

import React, { useState } from 'react';
import { Input, Button } from 'antd';

import styles from './index.module.less';

const LanguageSelection: React.FC = () => {
  const [searchLangsValue, setSearchLangsValue] = useState('');

  const onNextClick = () => {};

  return (
    <div className={styles.languageContainer}>
      <span className={styles.languagePrompt}>
        Choose your languageyou want to learn
      </span>
      <Input.Search
        size="large"
        placeholder="Search Languages"
        prefix={
          <img
            alt=""
            src="https://weavefox.alipay.com/assets/56acf216-06a2-49cd-b052-dddf6f288030.png"
            className={styles.searchIcon}
          />
        }
        value={searchLangsValue}
        onChange={e => {
          setSearchLangsValue(e.target.value);
        }}
        className={styles.languageSearchInput}
      />
      <div className={styles.imageRowOne}>
        <img
          alt=""
          src="https://weavefox.alipay.com/assets/bc079ca6-3e5f-4260-af18-c40943f096b1.png"
          className={styles.flagImageOne}
        />
        <img
          alt=""
          src="https://weavefox.alipay.com/assets/21f40d4f-1bde-4620-9491-59941e310c97.png"
          className={styles.flagImageTwo}
        />
      </div>
      <div className={styles.imageRowTwo}>
        <img
          alt=""
          src="https://weavefox.alipay.com/assets/071bd1dd-e7b1-4730-b504-349daf051d5b.png"
          className={styles.flagImageThree}
        />
        <img
          alt=""
          src="https://weavefox.alipay.com/assets/60eb564d-fcad-4805-a0d3-e563bc5e4b8d.png"
          className={styles.flagImageFour}
        />
      </div>
      <div className={styles.imageRowThree}>
        <img
          alt=""
          src="https://weavefox.alipay.com/assets/c1998fa9-de50-47c8-9d12-b762c2969a5d.png"
          className={styles.flagImageFive}
        />
        <img
          alt=""
          src="https://weavefox.alipay.com/assets/2459aad8-40ec-4c3b-ae17-0f3ec2a95977.png"
          className={styles.flagImageSix}
        />
      </div>
      <Button
        shape="round"
        size="large"
        onClick={onNextClick}
        className={styles.nextButton}
      >
        Next
      </Button>
    </div>
  );
};

export default LanguageSelection;


/*test7*/

import React from 'react';
import LanguageQuiz from './components/LanguageQuiz';
import LearningProgress from './components/LearningProgress';

import styles from './index.module.less';

const MyPageComponent: React.FC = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.innerContainer}>
        <LanguageQuiz />
        <LearningProgress />
      </div>
    </div>
  );
};

export default MyPageComponent;


/*test8*/

import React from 'react';

import styles from './index.module.less';

const LearningProgress: React.FC = () => {
  return (
    <div className={styles.congratulationsContainer}>
      <span className={styles.congratulationsText}>Congrats Your</span>
      <div className={styles.proficiencyLevelContainer}>
        <span className={styles.proficiencyLevelTitle}>
          Profciencu level is
        </span>
        <span className={styles.swipeInstruction}>AC12. Swipe Left to</span>
      </div>
      <span className={styles.learningStartText}>begin learning.</span>
      <img
        alt=""
        src="https://weavefox.alipay.com/assets/6a1fe400-563e-48db-b770-a0d563a9f8c5.png"
        className={styles.profileImage}
      />
    </div>
  );
};

export default LearningProgress;


/*test 9*/

import React from 'react';
import ItalianLesson from './components/ItalianLesson';
import VideoPlayer from './components/VideoPlayer';

import styles from './index.module.less';

const MyPageComponent: React.FC = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.innerContainer}>
        <VideoPlayer />
        <ItalianLesson />
      </div>
    </div>
  );
};

export default MyPageComponent;

/*test10*/

import React from 'react';
import { Button } from 'antd';

import styles from './index.module.less';

const ItalianLesson: React.FC = () => {
  const onGrazieMeaningClick = () => {};

  const onSpeakResponseAClick = () => {};

  const onNextClick = () => {};

  return (
    <div className={styles.lessonContainer}>
      <div className={styles.introductionSection}>
        <span className={styles.welcomeMessage}>
          Welcome to Lesson One! In thislesson， you&apos;ll learn essential
          ltalianphrases and greetings that will helpyou start conversations
        </span>
        <span className={styles.keyPhrasesTitle}>
          <span className={styles.keyWord}>Key</span>
          <span className={styles.phrasesWord}>hrases</span>
        </span>
        <div className={styles.phrasesList}>
          <div className={styles.phraseItem}>
            <span className={styles.phraseText}>Ciao-Hell/Goodbye</span>
            <img
              alt=""
              src="https://weavefox.alipay.com/assets/0b7de857-7b81-45fa-8fa6-da00e25f1d46.png"
              className={styles.phraseImage}
            />
          </div>
          <div className={styles.phraseItem2}>
            <span className={styles.phraseText2}>Come stai?-How are you?</span>
            <img
              alt=""
              src="https://weavefox.alipay.com/assets/bbabe818-a2d4-4035-b435-d66c4acda614.png"
              className={styles.phraseImage2}
            />
          </div>
          <div className={styles.phraseItem3}>
            <span className={styles.phraseText3}>Per favore-Please</span>
            <img
              alt=""
              src="https://weavefox.alipay.com/assets/bedeb49d-27a0-4994-9b76-9c292ae78efa.png"
              className={styles.phraseImage3}
            />
          </div>
          <div className={styles.phraseItem4}>
            <span className={styles.phraseText2}>Mi chiamo-My name is</span>
            <img
              alt=""
              src="https://weavefox.alipay.com/assets/2721bad1-df0a-4af7-b083-55f5c2c67215.png"
              className={styles.phraseImage4}
            />
          </div>
        </div>
      </div>
      <span className={styles.quizTitle}>Mini quiz with Sara</span>
      <div className={styles.quizContainer}>
        <div className={styles.quizOptions}>
          <img
            alt=""
            src="https://weavefox.alipay.com/assets/8998ee2a-b94a-401b-99cf-ba71c167d078.png"
            className={styles.optionImage}
          />
          <img
            alt=""
            src="https://weavefox.alipay.com/assets/f39d3705-4769-4d03-b535-bdb41e6ea637.png"
            className={styles.optionImage2}
          />
          <Button
            shape="round"
            onClick={onGrazieMeaningClick}
            className={styles.quizQuestionButton}
          >
            &quot;Wnat does&quot;Grazie&apos; mean in English?&quot;
          </Button>
        </div>
        <Button
          shape="round"
          onClick={onSpeakResponseAClick}
          className={styles.quizOptionButton}
        >
          <div className={styles.optionContent}>
            <div className={styles.optionInner}>
              <img
                alt=""
                src="https://weavefox.alipay.com/assets/595fb30d-6cf5-41d9-b5d0-55331b7bc1c5.png"
                className={styles.optionIcon}
              />
              <span className={styles.optionLabel}>Speak Response</span>
            </div>
            <span className={styles.optionLetter}>A</span>
          </div>
        </Button>
        <Button
          shape="round"
          size="large"
          onClick={onNextClick}
          className={styles.nextButton}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ItalianLesson;
