import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, Text, Button, Card, IconButton, Modal, Portal, Paragraph, Title } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import data from './data/QuizData';
import LearnData from './data/LearnData';


function QuizCard({ navigation, title, text = 'placeholder', cover = './assets/placeholder.jpg' }) {
  const imageCover = require('./assets/placeholder.jpg')

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => {
      navigation.navigate('Spil', { spil: title })
    }}>
      <Card mode='contained' style={{ marginBottom: 10 }}>
        <Card.Cover source={imageCover} />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{text}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}


function LearnCard({ navigation, title, text = 'placeholder', cover = './assets/placeholder.jpg' }) {
  const imageCover = require('./assets/placeholder.jpg')

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => {
      navigation.navigate('LærTekst', { learnCategory: title })
    }}>
      <Card mode='contained' style={{ marginBottom: 10 }}>
        <Card.Cover source={imageCover} />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{text}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}


function LearnScreen({ navigation }) {
  return (
    <>
      <ScrollView style={[styles.container, { padding: 10, marginTop: 60 }]}>
        <LearnCard navigation={navigation} title='Syntaks' />
        <LearnCard navigation={navigation} title='Verber' />
        <LearnCard navigation={navigation} title='Substantiver' />
      </ScrollView>
    </>
  );
}

const LearnStack = createNativeStackNavigator();

function LearnStackScreen() {
  return (
    <LearnStack.Navigator screenOptions={NavigationOptions}>
      <LearnStack.Screen name="Lær" component={LearnScreen} options={StackOptions} />
    </LearnStack.Navigator>
  );
}


function LearnTextScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({ title: route.params['learnCategory'] })
  })

  return (
    <ScrollView style={{ marginTop: 70, padding: 10 }}>
      {LearnData[route.params['learnCategory']]}
    </ScrollView>
  );
}


function GameScreen({ navigation, route }) {
  const [previousQuestions, setPreviousQuestions] = useState([])
  var gameCategory = route.params['spil']

  const getNewQuestion = () => {
    let possibleOptions = Array.from(Array(data.length).keys())
    const validOptions = possibleOptions.filter(i => !previousQuestions.includes(i))
    const validOptionsInCategory = validOptions.filter(i => (gameCategory == 'Alle kategorier') ? i : data[i]['category'].includes(gameCategory))
    const randomElement = validOptionsInCategory[Math.floor(Math.random() * validOptionsInCategory.length)];

    setPreviousQuestions(previousQuestions + [randomElement]);

    return randomElement;
  }

  const [currentQuestion, setCurrentQuestion] = useState(() => getNewQuestion());
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionDisabled, setIsOptionDisabled] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);


  useEffect(() => {
    navigation.setOptions({ title: route.params['spil'] })
  })

  const validateAnswer = (selectedOption) => {
    let correct_option = data[currentQuestion]['correct'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionDisabled(true);
    if (selectedOption == correct_option) {
      setScore(score + 1);
    }
  }



  const handleNext = () => {
    let possibleOptions = Array.from(Array(data.length).keys())
    const validOptions = possibleOptions.filter(i => !previousQuestions.includes(i))
    const validOptionsInCategory = validOptions.filter(i => (gameCategory == 'Alle kategorier') ? i : data[i]['category'].includes(gameCategory))

    if ((previousQuestions.length == 5) || (validOptionsInCategory.length == 0)) {
      setShowScore(true);
    } else {
      setCurrentQuestion(getNewQuestion());
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionDisabled(null);
    }

  }


  const showModal = () => {
    const navigation = useNavigation();

    return (
      <Portal>
        <Modal
          visible={showScore}
          onDismiss={() => navigation.navigate('Quiz')}
          contentContainerStyle={{ backgroundColor: 'white', padding: 30 }}
        >
          {
            score == 5 ? (<Text>Tillykke! Du svarede korrekt på alle!</Text>) : (<Text>Du svarede korrekt på {score} ud af 5. Prøv igen!</Text>)
          }
        </Modal>
      </Portal>
    );
  }


  const renderOptions = () => {
    return (
      <>
        {
          data[currentQuestion]?.answers.map(answer => (
            <TouchableOpacity
              activeOpacity={0.6}
              key={answer}
              onPress={() => validateAnswer(answer)}
              disabled={isOptionDisabled}
            >
              <Card
                mode='contained'
                style={{ marginBottom: 8 }}>
                <Card.Content>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text>{answer}</Text>
                    {
                      answer == correctOption ? (
                        <MaterialCommunityIcons name='check-bold' color='green' size={18} />
                      ) : answer == currentOptionSelected ? (
                        <MaterialCommunityIcons name='skull-crossbones' color='red' size={18} />
                      ) : null
                    }
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))
        }
      </>
    );
  }

  return (
    <>
      <View>
        {showModal()}
      </View>
      <ScrollView style={{ marginTop: 70, padding: 10 }}>
        <Text style={{ marginBottom: 30, fontSize: 20 }}><Text style={{ fontWeight: 'bold' }}>Spørgsmål:</Text> {data[currentQuestion]['question']}</Text>
        {renderOptions()}
        <Button style={{ marginTop: 20 }} onPress={() => handleNext()}>Næste spørgsmål</Button>
      </ScrollView>
    </>
  );
}


function QuizScreen({ navigation }) {
  return (
    <>
      <ScrollView style={[styles.container, { padding: 10, marginTop: 60 }]}>
        <QuizCard navigation={navigation} title="Alle kategorier" text="Den ultimative test med blandede spørgsmål fra alle kategorier" />
        <QuizCard navigation={navigation} title="Syntaks" text="Quiz med fokus på syntaks" />
        <QuizCard navigation={navigation} title="Verber" text="Quiz med fokus på verber" />
        <QuizCard navigation={navigation} title="Substantiver" text="Quiz med fokus på substantiver" />
      </ScrollView>
    </>
  );
}

const QuizStack = createNativeStackNavigator();

function QuizStackScreen() {
  return (
    <QuizStack.Navigator screenOptions={NavigationOptions}>
      <QuizStack.Screen name="Quiz" component={QuizScreen} options={StackOptions} />
    </QuizStack.Navigator>
  );
}

function AboutScreen({ navigation }) {
  return (
    <>
      <ScrollView style={[styles.container, { padding: 10, marginTop: 60 }]}>
        <Paragraph>Denne app er lavet af <Text style={styles.boldText} >Nina Christensen</Text> og <Text style={styles.boldText} >Claes Nymand Nilsson</Text>.</Paragraph>
        <Paragraph style={{ marginTop: 20 }}>Hvis du har nogle spørgsmål eller feedback kan du skrive en mail til apquiz@gmail.com</Paragraph>
      </ScrollView>
    </>
  );
}


const AboutStack = createNativeStackNavigator();

function AboutStackScreen() {
  return (
    <QuizStack.Navigator screenOptions={NavigationOptions}>
      <QuizStack.Screen name="Info" component={AboutScreen} options={StackOptions} />
    </QuizStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="QuizStack" component={QuizStackScreen} options={{
        tabBarLabel: 'Quiz',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cards-playing" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="LearnStack" component={LearnStackScreen} options={{
        tabBarLabel: 'Lær',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="school" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="AboutStack" component={AboutStackScreen} options={{
        tabBarLabel: 'Info',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  );
}

const StackOptions = {
  headerBackTitleVisible: false,
  headerTransparent: true,
  headerBlurEffect: 'extralight',
  headerTintColor: 'rgb(56, 0, 56)'
}

const NavigationOptions = {
  //headerRight: () => (<IconButton icon='dots-vertical' style={{ marginTop: 2 }} />)
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <PaperProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator screenOptions={NavigationOptions}>
          <Stack.Screen name="Home" component={TabScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Spil" component={GameScreen} options={StackOptions} />
          <Stack.Screen name="LærTekst" component={LearnTextScreen} options={StackOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  boldText: {
    fontWeight: 'bold'
  }
});
