import {useState} from 'react';
import {
  StyleSheet,
  Modal,
  Text,
  TextInput,
  Keyboard,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toggleModalAddTask, addNewTaskText} from '../store/slice/addTaskSlice';

const AddNewTask = () => {
  const [inputText, setInputText] = useState('');
  const toggleModal = useSelector(state => state.openModalAddTask.value);
  const dispatch = useDispatch();

  return (
    <Modal visible={toggleModal}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1, margin: 20}}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => dispatch(toggleModalAddTask(false))}>
          <Image source={require('../assets/arrowBack.png')} />
          <Text style={styles.backButtonText}>Вернуться назад</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={Keyboard.dismiss}
          accessible={false}
          activeOpacity={1}>
          <TextInput
            style={styles.input}
            placeholder="Текст новой задачи"
            onChangeText={setInputText}
            value={inputText}
          />
          <TouchableOpacity
            style={[
              styles.addButton,
              inputText.length === 0 ? styles.emptyInput : null,
            ]}
            disabled={inputText.length === 0 ? true : false}
            onPress={() => {
              Keyboard.dismiss;
              dispatch(addNewTaskText(inputText));
              setInputText('');
              dispatch(toggleModalAddTask(false));
            }}>
            <Text style={styles.addButtonText}>Добавить</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  backButtonText: {
    marginLeft: 30,
    color: '#999999',
    fontSize: 28,
    lineHeight: 33,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#FAFAFE',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 4,
    paddingTop: 8,
    paddingRight: 14,
    paddingBottom: 8,
    paddingLeft: 8,
    color: '#222F3E',
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 28,
  },
  emptyInput: {
    opacity: 0.5,
  },
  addButton: {
    width: '100%',
    backgroundColor: '#222F3E',
    marginTop: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  addButtonText: {
    textAlign: 'center',
    color: '#fff',
    paddingTop: 8,
    paddingBottom: 8,
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 28,
  },
});

export {AddNewTask};
