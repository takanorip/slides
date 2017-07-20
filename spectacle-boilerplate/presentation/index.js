// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  S,
  Image,
  CodePane,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/theme.css");


const images = {
  img01: require("../assets/img01.png"),
  img02: require("../assets/img02.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Mplus 1p",
  secondary: "Mplus 1p",
  tertiary: "Mplus 1p",
  quartenary: "Mplus 1p"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            What's
          </Heading>
          <Heading size={1} lineHeight={1} textColor="secondary">
            React / Flux / Redux
          </Heading>
          <Heading size={4} lineHeight={2} textColor="tertiary">
            Takanori Oki
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="primary" size={3} caps>目次</Heading>
          <List margin="40px 0 0">
            <ListItem>React?</ListItem>
            <ListItem>Flux?</ListItem>
            <ListItem>Redux?</ListItem>
            <ListItem>おまけ1 Reactと型</ListItem>
            <ListItem>おまけ1 Reactの周辺環境</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textColor="secondary" size={3} caps>自己紹介</Heading>
          <List margin="40px 0 0">
            <ListItem>大木尊紀(オオキタカノリ)(takanorip)</ListItem>
            <ListItem>フロントエンドエンジニア</ListItem>
            <ListItem>株式会社スマートドライブ</ListItem>
            <ListItem>最近のハイライト：エウレカセブン ハイエボリューションの前売りチケット買った</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>React?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <List margin="40px 0 0">
            <ListItem>Facebookの作った<S type="bold">UIライブラリ</S></ListItem>
            <ListItem>コンポーネント指向</ListItem>
            <ListItem>仮想DOM</ListItem>
            <ListItem>JSX</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary">Component Based</Heading>
          <BlockQuote>
            <Quote>Build encapsulated components that manage their own state, then compose them to make complex UIs.</Quote>
            <Cite>Facebook</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary">Component Based</Heading>
          <List margin="40px 0 0">
            <ListItem>Componentを組合せてUIをつくる</ListItem>
            <ListItem>Componentは閉じられていて、各々stateを持っている</ListItem>
            <ListItem>Componentにはpropsを渡すことができる</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} align="flex-start flex-start" bgColor="primary" textColor="secondary">
          <Image src={images.img01} display="block" width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary">Merits of Component</Heading>
          <List margin="40px 0 0">
            <ListItem>パーツごとに管理できるので運用が楽</ListItem>
            <ListItem>AtomicDesignなどと相性がいい</ListItem>
            <ListItem>HTML、CSS、JavaScriptを3つセットで扱うことができる</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={3} textColor="primary">JSX</Heading>
          <Text margin="40px 0 0" lineHeight={1.5} textColor="primary">
            JSXは、文字列でもHTMLでもありません。XMLに似たJavaScriptの構文拡張です。JSXはテンプレート言語を思い出させるかもしれませんが、JavaScriptの機能を完全に備えています。JSXはReact elementsを生成します。
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <CodePane lang="jsx" source={require("raw-loader!../assets/sample.example")} textColor="primary" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <CodePane lang="jsx" source={require("raw-loader!../assets/sample02.example")} textColor="primary" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <CodePane lang="jsx" source={require("raw-loader!../assets/sample03.example")} textColor="primary" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary">Lifecycle</Heading>
          <List margin="40px 0 0">
            <ListItem>componentWillMount()</ListItem>
            <ListItem>componentDidMount()</ListItem>
            <ListItem>componentWillReceiveProps()</ListItem>
            <ListItem>shouldComponentUpdate()</ListItem>
            <ListItem>componentWillUpdate()</ListItem>
            <ListItem>componentDidUpdate()</ListItem>
            <ListItem>componentWillUnmount()</ListItem>
          </List>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="secondary" textColor="primary">
          <CodePane lang="jsx" source={require("raw-loader!../assets/sample04.example")} textColor="primary" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={3} textColor="primary">仮想DOM</Heading>
          <Text margin="40px 0 0" lineHeight={1.5} textColor="primary">VirtualDOM = JavaScript Object</Text>
          <Text margin="0 0 40px" lineHeight={1.5} textColor="primary">rerenderingの際に前後の状態を比較し、その差分を実際のDOMに反映させる仕組み。</Text>
          <Link textColor="secondary" src="http://qiita.com/koba04/items/de79f158cd1f59ba5d20">参考【React.jsのVirtualDOMについて】</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Image src={images.img02} display="block" width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary">仮想DOM</Heading>
          <BlockQuote>
            <Quote>仮想DOMとは世界を革命する力であり、このjQueryのDOM操作で汚れきったフロントエンドを救う救世主なのです。</Quote>
            <Cite>mizchi</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Flux?</Heading>
        </Slide>
      </Deck>
    );
  }
}
