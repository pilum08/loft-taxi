import  recordSaga  from "../../recordSaga";
import { watchSignIn } from "./authorizationSaga";
import { signInUser } from '../actions';


jest.mock("../../../api", () => ({ userLogin: jest.fn(() => true) }));
describe('authorisationSaga', () => {
  describe('SIGN_IN_USER', () => {
    it('authorisation', async () => {
      const dispatched = await recordSaga(
        watchSignIn,
        signInUser('testlogin', 'testpassword')
      )
      expect(dispatched).toEqual([
        {
          type: "SIGN_IN_USER_SUCCESS"
        }
      ])
    })
  })
})