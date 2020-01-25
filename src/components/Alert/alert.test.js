import { shallowMount } from '@vue/test-utils'
import { Alert } from '.'

describe('===== Alert Component Tests =====', () => {
  let alert
  beforeEach(() => {
    alert = shallowMount(Alert, {
      propsData: {
        id: 123,
        title: 'Test notification',
        close: jest.fn(),
        clear: jest.fn(),
        reset: jest.fn()
      }
    })
  })
  describe('Instance tests', () => {
    it('should be a Vue instance', () => {
      expect(alert.isVueInstance()).toBeTruthy()
    })
  })
})
