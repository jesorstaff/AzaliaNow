import {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';
import {useDispatch, useSelector} from 'react-redux';
import {toggleModalAddTask} from '../store/slice/addTaskSlice';

const taskList = [
  {key: 0, text: 'Сделать тестовое', checked: true},
  {key: 1, text: 'Сдать тестовое', checked: false},
  {key: 2, text: 'Начать зарабатывать  🙌', checked: false},
];

const rowTranslateAnimatedValues = {};

const Todos = () => {
  const [listData, setListData] = useState(taskList);
  const dispatch = useDispatch();
  const newTaskText = useSelector(state => state.openModalAddTask.text);

  if (listData.length > 0) {
    Array(listData.length)
      .fill('')
      .forEach((_, i) => {
        rowTranslateAnimatedValues[`${i}`] = new Animated.Value(0);
      });
  }

  useEffect(() => {
    if (newTaskText !== null) {
      setListData([
        ...listData,
        {key: listData.length + 1, text: newTaskText, checked: false},
      ]);
    }
  }, [newTaskText]);

  const onSwipeValueChange = swipeData => {
    const {key, value} = swipeData;
    if (value < -Dimensions.get('window').width && !this.animationIsRunning) {
      this.animationIsRunning = true;
      Animated.timing(rowTranslateAnimatedValues[key], {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === key);
        newData.splice(prevIndex, 1);
        setListData(newData);
        this.animationIsRunning = false;
      });
    }
  };

  const renderItem = data => (
    <Animated.View>
      <TouchableHighlight
        onPress={() => handleClick(data)}
        underlayColor={'white'}>
        <View style={styles.taskElement}>
          <View style={styles.checkbox}>
            {data.item.checked ? (
              <Image
                source={require('../assets/checkbox.png')}
                style={styles.checkboxIcon}
              />
            ) : null}
          </View>
          <Text
            style={[styles.text, data.item.checked ? styles.checked : null]}>
            {data.item.text}
          </Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );

  const handleClick = element => {
    setListData(
      [...listData],
      listData.map(item => {
        if (item.key === element.item.key)
          return (item.checked = !item.checked);
      }),
    );
  };

  const renderHiddenItem = () => (
    <View style={styles.rowBack}>
      <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Text style={styles.backTextWhite}>Удалить</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <SwipeListView
        disableRightSwipe
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-Dimensions.get('window').width}
        onSwipeValueChange={onSwipeValueChange}
        useNativeDriver={false}
        contentContainerStyle={{padding: 20}}
      />

      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => dispatch(toggleModalAddTask(true))}>
          <Image source={require('../assets/plusIcon.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 56,
    height: 56,
    marginRight: 36,
    marginBottom: 30,
  },
  taskElement: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFE',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 9,
    paddingRight: 9,
    marginBottom: 16,
    minHeight: 44,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 4,
  },
  checked: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: '#222F3E',
    borderRadius: 4,
    borderWidth: 2,
    marginRight: 16,
  },
  checkboxIcon: {
    flex: 1,
    width: 18,
    height: 20,
    left: -1,
  },
  text: {
    color: '#222F3E',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '400',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    borderRadius: 8,
    marginBottom: 16,
  },
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    borderRadius: 8,
    right: 0,
  },
  backTextWhite: {
    color: '#FFF',
  },
});

export {Todos};
