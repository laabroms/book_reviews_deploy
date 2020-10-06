import React from 'react';
import './parentSurvey.css';
import PersonalInfo from '../../components/personalInfo/personalInfo';
import ClearnessCalculatorYounger from '../../components//clearnessCalculator/clearnessCalculatorYounger';
import ChatterBar from '../../components/chatterBar/chatterBar';
import FeelingFactor from '../../components/feelingFactor/feelingFactor';
import AccessibilityScore from '../../components/accessibilityScore/accessibilityScore';
import DiversityRep from '../../components/diversityRepresentation/diversityRep';
import FavLeastFav from '../../components/favLeastFav/favLeastFav';
import {StarRating} from '../../components/starRating/starRating';
import Keywords from '../../components/keywords/keywords';
import ExtraInfo from '../../components/extraInfo/extraInfo';
import Feedback from '../../components/feedback/feedback';
import FadeIn from "react-fade-in";
import InspirationElement from '../../components/inspirationElement/inspirationElement';
import GrippingGrade from '../../components/grippingGrade/grippingGrade';
import PacingScore from '../../components/pacingScore/pacingScore';
import axios from 'axios';
import {Spinner} from 'react-bootstrap';
import MasterpieceMeter from '../../components/masterpieceMeter/masterpieceMeter';
import MasterpieceMeterOlder from '../../components/masterpieceMeter/masterpieceMeterOlder';
import SillyScore from '../../tags/sillyScore';
import SpookyScore from '../../tags/spookyScore';
import FestivityFactor from '../../tags/festivityFactor';
import ActionAverage from '../../tags/actionAverage';
import FriendshipScore from '../../tags/friendshipScore';
import AwesomeAnimals from '../../tags/awesomeAnimals';
import MysteryMeter from '../../tags/mysteryMeter';
import FantasyFactor from '../../tags/fantasyFactor';
import RealnessRating from '../../tags/realnessRating';
import HeartMeter from '../../tags/heartMeter';
import ThrillFactor from '../../tags/thrillFactor';
import SuspenseScale from '../../tags/suspenseScale';
import ComplexCharacter from '../../tags/complexCharacter';


export default class ParentSurvey extends React.Component {
  constructor(props) {
    super(props);
    // this.eventHandler = this.eventHandler.bind(this);
    this.state = {
      title: Object.values(this.props.match.params).toString(),
      author: "",
      tags: "",
      age_range: "",
      isbn: "",

      name: "",
      age: "",
      location: "",
      country: "",
      clearness: 50,
      masterpiece: 50,
      educational: 50,
      chatter: 50,
      chatterElements: "",
      inspiration: 50,
      inspirationElements: "",
      feelings: 50,
      feelingsElements: "",
      accessibility: 50,
      diversity: "",
      favorite: "",
      critique: "",
      stars: "",
      keywords: "",
      extraInfo: "",
      feedback: "",
      gripping: "",
      pacing: "",

      silly: 50,
      sillyElements: "",
      spooky: 50,
      spookyElements: "",
      festivity: 50,
      festivityElements: "",
      action: 50,
      actionElements: "",
      friendship: 50,
      friendshipElements: "",
      animal: 50,
      animalElements: "",
      mystery: 50,
      mysteryElements: "",
      fantasy: 50,
      fantasyElements: "",
      realness: 50,
      realnessElements: "",
      heart: 50,
      heartElements: "",
      thrill: 50,
      thrillElements: "",
      suspense: 50,
      suspenseElements: "",
      complexity: "",
      sending: false,
    };
  }

  componentDidMount = async () => {
    var url =
      "https://cors-anywhere.herokuapp.com/https://rotten-books.herokuapp.com/bookAdmin/api/get_all_books";
    const response = await axios.get(url);

    this.setState({ books: response.data });

    var length = this.state.title.length;

    var index = findWithAttr(
      this.state.books,
      "title",
      this.state.title.toString(),
      length
    );

    var title = this.state.books[index].fields["title"];
    this.setState({
      title: title,
    });

    var author = this.state.books[index].fields["author"];
    this.setState({
      author: author,
    });
    var tags = this.state.books[index].fields["tags"];
    this.setState({
      tags: tags,
    });
    var age_range = this.state.books[index].fields["age_range"];
    this.setState({
      age_range: age_range,
    });
    var isbn = this.state.books[index].fields["isbn"];
    this.setState({
      isbn: isbn,
    });
  };

  handlePersonalInfo = (data) => {
    this.setState({
      name: data.name,
      age: data.age,
      location: data.location,
      country: data.country,
    });
  };

  handleDiversity = (data) => {
    this.setState({
      diversity: data.diversityAndRepresentation,
    });
  };
  handleFav = (data) => {
    this.setState({
      favorite: data.favorite,
      critique: data.leastFav,
    });
  };

  handleKeywords = (data) => {
    this.setState({
      keywords: data.keywords,
    });
  };
  handleFeedback = (data) => {
    this.setState({
      feedback: data.feedback,
    });
  };

  handleExtraInfo = (data) => {
    this.setState({
      extraInfo: data.extraInfo,
    });
  };

  handleStars = (data) => {
    this.setState({
      stars: data.rating,
    });
  };

  handleClearness = (data) => {
    this.setState({
      clearness: data.clearness,
    });
  };

  handleMasterpiece = (data) => {
    this.setState({
      masterpiece: data.masterpiece,
    });
  };

  handleEducational = (data) => {
    this.setState({
      educational: data.educational,
    });
  };

  handleChatter = (data) => {
    var chatterElements = "";
    if (data.character === true) {
      chatterElements += "the characters, ";
    }
    if (data.plot === true) {
      chatterElements += "the plot, ";
    }
    if (data.setting === true) {
      chatterElements += "the setting, ";
    }
    if (data.educational === true) {
      chatterElements += "the educational elements, ";
    }
    if (data.emotional === true) {
      chatterElements += "the emotional aspects, ";
    }
    if (data.other === true) {
      chatterElements += data.otherInfo;
    }

    this.setState({
      chatter: data.chatter,
      chatterElements: chatterElements,
    });
  };

  handleInspiration = (data) => {
    var inspoElements = "";
    if (data.resilience === true) {
      inspoElements += "resilience, ";
    }
    if (data.perseverance === true) {
      inspoElements += "perseverance, ";
    }
    if (data.kindness === true) {
      inspoElements += "kindness, ";
    }
    if (data.bravery === true) {
      inspoElements += "bravery, ";
    }
    if (data.hope === true) {
      inspoElements += "hope, ";
    }
    if (data.generosity === true) {
      inspoElements += "generosity, ";
    }
    if (data.empathy === true) {
      inspoElements += "empathy, ";
    }
    if (data.other === true) {
      inspoElements += data.otherInfo;
    }

    this.setState({
      inspiration: data.inspiration,
      inspirationElements: inspoElements,
    });
  };

  handleFeeling = (data) => {
    var feelingsElements = "";
    if (data.happiness === true) {
      feelingsElements += "happiness, ";
    }
    if (data.sadness === true) {
      feelingsElements += "sadness, ";
    }
    if (data.fear === true) {
      feelingsElements += "fear, ";
    }
    if (data.anger === true) {
      feelingsElements += "anger, ";
    }
    if (data.surprise === true) {
      feelingsElements += "surprise, ";
    }
    if (data.disappointment === true) {
      feelingsElements += "disappointment, ";
    }
    if (data.hopefulness === true) {
      feelingsElements += "hopefulness, ";
    }
    if (data.amusement === true) {
      feelingsElements += "amusement, ";
    }
    if (data.anxiety === true) {
      feelingsElements += "anxiety, ";
    }
    if (data.compassion === true) {
      feelingsElements += "compassion, ";
    }
    if (data.excitement === true) {
      feelingsElements += "excitement, ";
    }
    if (data.confusion === true) {
      feelingsElements += "confusion, ";
    }
    if (data.frustration === true) {
      feelingsElements += "frustration, ";
    }
    if (data.other === true) {
      feelingsElements += data.otherInfo;
    }

    this.setState({
      feelings: data.feeling,
      feelingsElements: feelingsElements,
    });
  };

  handleAccessibility = (data) => {
    this.setState({
      accessibility: data.accessibility,
    });
  };
  handleGripping = (data) => {
    this.setState({
      gripping: data.grippingGrade,
    });
  };
  handlePacing = (data) => {
    this.setState({
      pacing: data.pacing,
    });
  };

  handleSilly = (data) => {
    var sillyElements = "";
    if (data.physical === true) {
      sillyElements += "over-the-top/physical, ";
    }
    if (data.verbal === true) {
      sillyElements += "clever/verbal, ";
    }
    if (data.gross === true) {
      sillyElements += "gross, ";
    }
    if (data.loving === true) {
      sillyElements += "loving, ";
    }
    if (data.other === true) {
      sillyElements += data.otherInfo;
    }

    this.setState({
      silly: data.silly,
      sillyElements: sillyElements,
    });
  };

  handleSpooky = (data) => {
    var spookyElements = "";
    if (data.fun === true) {
      spookyElements += "fun, ";
    }
    if (data.spooky === true) {
      spookyElements += "spooky, ";
    }
    if (data.humorous === true) {
      spookyElements += "humorous, ";
    }
    if (data.emotional === true) {
      spookyElements += "emotional, ";
    }
    if (data.other === true) {
      spookyElements += data.otherInfo;
    }
    this.setState({
      spooky: data.spooky,
      spookyElements: spookyElements,
    });
  };

  handleFestivity = (data) => {
    var festivityElements = "";
    if (data.traditions === true) {
      festivityElements +=
        "traditions and celebrations surrounding a holiday, ";
    }
    if (data.seasonal === true) {
      festivityElements += "seasonal activities, ";
    }
    if (data.silly === true) {
      festivityElements += "silly characters, ";
    }
    if (data.other === true) {
      festivityElements += data.otherInfo;
    }
    this.setState({
      festivity: data.festivity,
      festivityElements: festivityElements,
    });
  };
  handleAction = (data) => {
    var actionElements = "";
    if (data.gradualAdventure === true) {
      actionElements += "gradually building adventure, ";
    }
    if (data.bursts === true) {
      actionElements += "quick bursts of action, ";
    }
    if (data.goodVsEvil === true) {
      actionElements += "good vs evil battles, ";
    }
    if (data.roadTrip === true) {
      actionElements += "road trip adventures, ";
    }
    if (data.findSomething === true) {
      actionElements += "adventure to find something, ";
    }
    if (data.other === true) {
      actionElements += data.otherInfo;
    }
    this.setState({
      action: data.action,
      actionElements: actionElements,
    });
  };
  handleFriendship = (data) => {
    var friendshipElements = "";
    if (data.bestFriends === true) {
      friendshipElements += "best friends, ";
    }
    if (data.onlyAtSchool === true) {
      friendshipElements += "only-at-school friends, ";
    }
    if (data.outOfConvenience === true) {
      friendshipElements += "friends out of convenience, ";
    }
    if (data.fake === true) {
      friendshipElements += "fake friends, ";
    }
    if (data.new === true) {
      friendshipElements += "new friends, ";
    }
    if (data.frenemies === true) {
      friendshipElements += "frenemies, ";
    }
    if (data.lifelong === true) {
      friendshipElements += "lifelong friends, ";
    }
    if (data.unhealthy === true) {
      friendshipElements += "unhealthy friendships: mean-spirited, ";
    }
    if (data.other === true) {
      friendshipElements += data.otherInfo;
    }
    this.setState({
      friendship: data.friendship,
      friendshipElements: friendshipElements,
    });
  };
  handleAwesome = (data) => {
    var animalElements = "";
    if (data.cuteAnimals === true) {
      animalElements += "cute animals, ";
    }
    if (data.scaryAnimals === true) {
      animalElements += "scary animals, ";
    }
    if (data.photographedAnimals === true) {
      animalElements += "photographed animals, ";
    }
    if (data.illustratedAnimals === true) {
      animalElements += "illustrated animals, ";
    }
    if (data.wildAnimals === true) {
      animalElements += "wild animals, ";
    }
    if (data.zooAnimals === true) {
      animalElements += "zoo animals, ";
    }
    if (data.talkingAnimals === true) {
      animalElements += "talking animals, ";
    }
    if (data.petAnimals === true) {
      animalElements += "pet animals, ";
    }
    if (data.other === true) {
      animalElements += data.otherInfo;
    }
    this.setState({
      animal: data.animals,
      animalElements: animalElements,
    });
  };
  handleMystery = (data) => {
    var mysteryElements = "";
    if (data.funExciting === true) {
      mysteryElements += "fun and exciting, ";
    }
    if (data.intense === true) {
      mysteryElements += "intense and nerve-wrecking, ";
    }
    if (data.mix === true) {
      mysteryElements += "mix of both, ";
    }
    this.setState({
      mystery: data.mystery,
      mysteryElements: mysteryElements,
    });
  };
  handleFantasy = (data) => {
    var fantasyElements = "";
    if (data.setting === true) {
      fantasyElements += "the setting, ";
    }
    if (data.characters === true) {
      fantasyElements += "the characters, ";
    }
    if (data.magic === true) {
      fantasyElements += "the magic, ";
    }
    if (data.other === true) {
      fantasyElements += data.otherInfo;
    }
    this.setState({
      fantasy: data.fantasy,
      fantasyElements: fantasyElements,
    });
  };
  handleRealness = (data) => {
    var realnessElements = "";
    if (data.dialogue === true) {
      realnessElements += "the dialogue, ";
    }
    if (data.characters === true) {
      realnessElements += "the characters, ";
    }
    if (data.setting === true) {
      realnessElements += "the setting, ";
    }
    if (data.problems === true) {
      realnessElements += "the problems that the characters face, ";
    }
    if (data.resolution === true) {
      realnessElements += "the resolution of the story, ";
    }
    if (data.other === true) {
      realnessElements += data.otherInfo;
    }
    this.setState({
      realness: data.realness,
      realnessElements: realnessElements,
    });
  };
  handleHeart = (data) => {
    var heartElements = "";
    if (data.historical === true) {
      heartElements += "historical romance, ";
    }
    if (data.willThey === true) {
      heartElements += "will-they/won't-they romance, ";
    }
    if (data.bestFriends === true) {
      heartElements += "best friends-turned-romantic partners romance, ";
    }
    if (data.dystopian === true) {
      heartElements += "dystopian or paranormal romance, ";
    }
    if (data.enemies === true) {
      heartElements += "enemies-turned-romantic partners romance, ";
    }
    if (data.firstLove === true) {
      heartElements += "first loves, ";
    }
    if (data.other === true) {
      heartElements += data.otherInfo;
    }
    this.setState({
      heart: data.heart,
      heartElements: heartElements,
    });
  };
  handleThrill = (data) => {
    var thrillElements = "";
    if (data.ghosts === true) {
      thrillElements += "ghosts/evil spirits, ";
    }
    if (data.monsters === true) {
      thrillElements += "monsters, ";
    }
    if (data.vampires === true) {
      thrillElements += "vampires, ";
    }
    if (data.superpowers === true) {
      thrillElements += "superpowers, ";
    }
    if (data.possessions === true) {
      thrillElements += "possessions, ";
    }
    if (data.hauntings === true) {
      thrillElements += "hauntings, ";
    }
    if (data.killers === true) {
      thrillElements += "killers/murderers, ";
    }
    if (data.disappearances === true) {
      thrillElements += "disappearances, ";
    }
    if (data.zombies === true) {
      thrillElements += "zombies, ";
    }
    if (data.blood === true) {
      thrillElements += "blood/gore, ";
    }
    if (data.other === true) {
      thrillElements += data.otherInfo;
    }
    if (data.notScary === true) {
      thrillElements = "not scary, ";
    }
    this.setState({
      thrill: data.thrill,
      thrillElements: thrillElements,
    });
  };
  handleSuspense = (data) => {
    var suspenseElements = "";
    if (data.characters === true) {
      suspenseElements += "the characters/their identities, ";
    }
    if (data.pacing === true) {
      suspenseElements += "the pacing, ";
    }
    if (data.conflict === true) {
      suspenseElements += "conflict, ";
    }
    if (data.setting === true) {
      suspenseElements += "the setting/atmosphere, ";
    }
    if (data.other === true) {
      suspenseElements += data.otherInfo;
    }
    this.setState({
      suspense: data.suspense,
      suspenseElements: suspenseElements,
    });
  };
  handleComplex = (data) => {
    this.setState({
      complexity: data.complexCharacter,
    });
  };

  submitHandler = async (e) => {
    this.setState({
      sending: true
    })

    var bodyFormData = new FormData();

    bodyFormData.append("isbn", this.state.isbn);
    bodyFormData.append("name", this.state.name);
    bodyFormData.append("age", this.state.age);
    bodyFormData.append("location", this.state.location);
    bodyFormData.append("country", this.state.country);

    if (this.state.age_range === "y") {
      bodyFormData.append("clearness", this.state.clearness);
      bodyFormData.append("masterpiece", this.state.masterpiece);
    }
    bodyFormData.append("educational", this.state.educational);
    bodyFormData.append("chatter", this.state.chatter);
    bodyFormData.append("chatterElements", this.state.chatterElements);
    bodyFormData.append("inspiration", this.state.inspiration);
    bodyFormData.append("inspirationElements", this.state.inspirationElements);
    bodyFormData.append("feelings", this.state.feelings);
    bodyFormData.append("feelingsElements", this.state.feelingsElements);
    bodyFormData.append("accessibility", this.state.accessibility);
    bodyFormData.append("diversity", this.state.diversity);
    bodyFormData.append("favorite", this.state.favorite);
    bodyFormData.append("critique", this.state.critique);
    bodyFormData.append("stars", this.state.stars);
    bodyFormData.append("keywords", this.state.keywords);
    bodyFormData.append("extraInfo", this.state.extraInfo);
    bodyFormData.append("feedback", this.state.feedback);
    bodyFormData.append("gripping", this.state.gripping);
    if (this.state.age_range === "o" || this.state.title === 'Guts') {
      bodyFormData.append("pacing", this.state.pacing);
    }
    bodyFormData.append("favorite", this.state.favorite);

    if (this.state.sillyElements !== "") {
      bodyFormData.append("silly", this.state.silly);
    }
    if (this.state.spookyElements !== "") {
      bodyFormData.append("spooky", this.state.spooky);
    }
    if (this.state.festivityElements !== "") {
      bodyFormData.append("festivity", this.state.festivity);
    }
    if (this.state.actionElements !== "") {
      bodyFormData.append("action", this.state.action);
    }
    if (this.state.friendshipElements !== "") {
      bodyFormData.append("friendship", this.state.friendship);
    }
    if (this.state.animalElements !== "") {
      bodyFormData.append("animal", this.state.animal);
    }
    if (this.state.mysteryElements !== "") {
      bodyFormData.append("mystery", this.state.mystery);
    }
    if (this.state.fantasyElements !== "") {
      bodyFormData.append("fantasy", this.state.fantasy);
    }
    if (this.state.realnessElements !== "") {
      bodyFormData.append("realness", this.state.realness);
    }
    if (this.state.heartElements !== "") {
      bodyFormData.append("heart", this.state.heart);
    }
    if (this.state.thrillElements !== "") {
      bodyFormData.append("thrill", this.state.thrill);
    }
    if (this.state.suspenseElements !== "") {
      bodyFormData.append("suspense", this.state.suspense);
    }
    if (this.state.complex !== "") {
      bodyFormData.append("complexity", this.state.complexity);
    }

    var url =
      "https://cors-anywhere.herokuapp.com/https://rotten-books.herokuapp.com/bookAdmin/api/saveParentSurvey";

    // eslint-disable-next-line
    const response = await axios({
      method: "post",
      url: url,
      data: bodyFormData,
      headers: {
        "content-type": `multipart/form-data; boundary=$(form._boundary)`,
      },
    })
      // .then(
      //    setTimeout(function () {
      //     this.setState({
      //       sending: false,
      //     })
      //     if (this.state.sending === false) {
      //       this.props.history.push('/submitted')
      //     }
      //   }.bind(this), 1500)
      // );
      .then(
        this.props.history.push('/submitted')
      );
  };

  render() {
    const container = {
      margin: "3%",
    };
    const bookTitle = {
      fontWeight: "bold",
    };
    const bookInfo = {
      fontSize: 30,
    };

    if (this.state.author !== "") {
      return (
        <form type="submit">
          <>
            <FadeIn>
              <div style={container}>
                {/* <h2>Book Level and Target Review</h2> */}
                <p style={bookInfo}>
                  <i style={bookTitle}>{this.state.title}</i> by{" "}
                  {this.state.author}
                </p>
                <PersonalInfo onChange={this.handlePersonalInfo} />

                {/* for younger */}
                {this.state.age_range === "y" ? (
                  <>
                    <ClearnessCalculatorYounger
                      onChange={this.handleClearness}
                    />
                    <MasterpieceMeter onChange={this.handleMasterpiece} />
                  </>
                ) : null}

                <ChatterBar onChange={this.handleChatter} />
                <InspirationElement onChange={this.handleInspiration} />
                <FeelingFactor onChange={this.handleFeeling} />

                {this.state.tags.includes("Humor") ? (
                  <SillyScore onChange={this.handleSilly} />
                ) : null}

                {this.state.tags.includes("Halloween") ? (
                  <SpookyScore onChange={this.handleSpooky} />
                ) : null}

                {this.state.tags.includes("Holidays") ? (
                  <FestivityFactor onChange={this.handleFestivity} />
                ) : null}

                {this.state.tags.includes("Adventure") ? (
                  <ActionAverage onChange={this.handleAction} />
                ) : null}

                {this.state.tags.includes("Friendship") ? (
                  <FriendshipScore onChange={this.handleFriendship} />
                ) : null}

                {this.state.tags.includes("Animals") ? (
                  <AwesomeAnimals onChange={this.handleAwesome} />
                ) : null}

                {this.state.tags.includes("Graphic Novel") ? (
                  <MasterpieceMeterOlder onChange={this.handleMasterpiece} />
                ) : null}

                {this.state.tags.includes("Mystery") ? (
                  <MysteryMeter onChange={this.handleMystery} />
                ) : null}

                {this.state.tags.includes("Fantasy") ||
                this.state.tags.includes("Fairy Tales") ? (
                  <FantasyFactor onChange={this.handleFantasy} />
                ) : null}

                {this.state.tags.includes("Realistic Fiction") ? (
                  <RealnessRating onChange={this.handleRealness} />
                ) : null}

                {this.state.tags.includes("Romance") ? (
                  <HeartMeter onChange={this.handleHeart} />
                ) : null}

                {this.state.tags.includes("Horror") ? (
                  <ThrillFactor onChange={this.handleThrill} />
                ) : null}

                {this.state.tags.includes("Suspense") ? (
                  <SuspenseScale onChange={this.handleSuspense} />
                ) : null}

                {this.state.title === "A Boy Called Bat" ||
                this.state.title === "Front Desk" ? (
                  <ComplexCharacter onChange={this.handleComplex} />
                ) : null}

                <AccessibilityScore onChange={this.handleAccessibility} />
                <GrippingGrade onChange={this.handleGripping} />

                {/* for older */}
                {this.state.age_range === "o" || this.state.title === 'Guts' ? (
                  <>
                    <PacingScore onChange={this.handlePacing} />
                  </>
                ) : null}

                <DiversityRep onChange={this.handleDiversity} />
                <FavLeastFav onChange={this.handleFav} />
                <StarRating onChange={this.handleStars} />
                <Keywords onChange={this.handleKeywords} />
                <ExtraInfo onChange={this.handleExtraInfo} />
                <Feedback onChange={this.handleFeedback} />

                <button
                  type="submit"
                  className="submitButton"
                  onClick={this.submitHandler}
                >
                {this.state.sending === true ? (
                  <Spinner animation="border" role="status" variant="light" size='sm' />
                ) : 
                  ('SUBMIT')
                 }
                  
                </button>
              </div>
            </FadeIn>
          </>
        </form>
      );
    } else {
      return (
        <div
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
          }}
        >
          <Spinner animation="border" role="status" variant="secondary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }
  }
}



function findWithAttr(array, attr, value, length) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i].fields[attr].substring(0, length) === value) {
      return i;
    }
  }
  return -1;
}
