import { recordSaga } from "../../recordSaga";
import { watchSignIn } from "./authorizationSaga";
import { signIn } from '../actions';


jest.mock("../../../api", () => ({ userLogin: jest.fn(() => true) }));
describe('authSaga', () => {
  describe('SIGN_IN', () => {
    it('authorisation', async () => {
      const dispatched = await recordSaga(
        watchSignIn,
        signIn('testlogin', 'testpassword')
      )
      expect(dispatched).toEqual([
        {
          type: "SIGN_IN_USER_SUCCESS"
        }
      ])
    })
  })
})