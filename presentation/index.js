// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Markdown,
  CodePane,
  Code,
  MarkdownSlides,
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
// require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  black: "black"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} transition={[]} transitionDuration={500}>
        <Slide bgColor="primary" >
          <Heading size={1} fit caps textColor="secondary">React Primer</Heading>
        </Slide>
        <Slide bgColor="secondary" transition={["slide"]}>
          <Heading size={2} caps textColor="primary">What is React?</Heading>
          <Heading size={4}>&nbsp;</Heading>
          <Appear>
            <Text textColor="primary">Javascript library for building user interfaces</Text>
          </Appear>
        </Slide>
        <Slide bgColor="tertiary" transition={["spin"]}>
          <Heading size={3} caps>But why??</Heading>
          <List>
            <Appear><ListItem>Fast and efficient</ListItem></Appear>
            <Appear><ListItem>Javascript + HTML</ListItem></Appear>
            <Appear><ListItem>Declarative syntax</ListItem></Appear>
            <Appear><ListItem>Consistently maintain state</ListItem></Appear>
            <Appear><ListItem>Resuable components</ListItem></Appear>
            <Appear><ListItem>Testable components</ListItem></Appear>
            <Appear><ListItem>'Learn once, build anywhere'</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]}>
          <Heading size="2" lineHeight="2">Example</Heading>
          <CodePane lang="javascript" source={require("raw-loader!../assets/react.example")} />
        </Slide>
        <Slide bgColor="quartenary" notes={require("raw-loader!../assets/es6.notes")} transition={["spin"]}>
          <Heading size="2">About ES6 then...</Heading>
        </Slide>
        <CodeSlide bgColor="black"
          transition={[]}
          textColor="secondary"
          lang="js"
          code={require("raw-loader!../assets/es6.example")}
          ranges={[
            { loc: [0, 0], title: "Examples of Differences" },
            { loc: [3, 8], note: "Standard ES Function" },
            { loc: [10, 15], note: "ES6 Arrow Function", notes: "Written as an arrow function moves us more into the functional paradigm. Similar behavior was available prior to ES6" },
            { loc: [19, 23], note: "ES5 Variable Declaration" },
            { loc: [25, 32], note: "ES6 Variable Declaration", notes: "let/const imply intent" },
            { loc: [71, 76], note: "ES5 Property Retrieval", notes: "Lets build an object with a property of foo" },
            { loc: [78, 82], note: "ES6 Destructuring", notes: "Extract multiple properties in a single a single call" },
            { loc: [83, 89], notes: "Setup a more complex object" },
            { loc: [89, 93], notes: "Extract title and attendees from it" },
            { loc: [82, 93], title: "Oh snap" },
            { loc: [36, 45], note: "ES5 \"Classes\"", notes: "Next code segment hides the title" },
            { loc: [45, 56], note: "ES6 Classes" },
            { loc: [59, 60], note: "Import from modules" },
            { loc: [61, 62], note: "Import from files" }

          ]}
        />
        <Slide bgColor="quartenary">
          <Markdown>More information on ES6 features: [https://github.com/lukehoban/es6features](https://github.com/lukehoban/es6features)</Markdown>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={3} caps>Environment setup</Heading>
          <List>
            <Appear><ListItem>Install Node<br /><Code>$ brew update && brew install node</Code></ListItem></Appear>
            <Appear><ListItem>Install Yarn<br /><Code>$ brew install yarn</Code></ListItem></Appear>
            <Appear><ListItem>Install create-react-app<br /><Code>$ yarn global install create-react-app</Code></ListItem></Appear>
            <Appear><ListItem>Setup an IDE (Idea/Webstorm, VS Code, Atom, etc...)</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} caps textColor="white">Requirements</Heading>
          <Heading size={5} textAlign="left" textColor="white">Object</Heading>
          <List>
            <ListItem textAlign="left" textColor="white">
              <Code textColor="white">id</Code> - uuid - system generated
            </ListItem>
            <ListItem textAlign="left" textColor="white">
              <Code textColor="white">title</Code> - string - name of the to do item
            </ListItem>
            <ListItem textAlign="left" textColor="white">
              <Code textColor="white">isCompleted</Code> - boolean - flag denoting whether the to do is completed
            </ListItem>
          </List>
          <Heading size={5} textAlign="left" textColor="white">Behavior</Heading>
          <List>
            <ListItem textAlign="left" textColor="white">Users should be able to create, update, delete and toggle complete on todo items</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} caps>TIME TO CODE</Heading>
        </Slide>
      </Deck>
    );
  }
}
