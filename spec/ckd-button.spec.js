import { mount } from '@vue/test-utils'
import Button from '../src/ckd-button.vue'

describe('CKD Button', () => {

  it('should not be a link if href is not supplied', () => {
    const component = mount(Button);
    expect(component.vm.isLink()).toBeFalsy();
  });

  it('should be a link if href is supplied', () => {
    const component = mount(Button);
    component.setProps({ href: '/' });
    expect(component.vm.isLink()).toBeTruthy();
  });

  it('should have a disabled class if disabled', () => {
    const component = mount(Button);
    component.setData({ disabled: false });
    expect(component.classes()).not.toContain('disabled');

    component.setData({ disabled: true });
    expect(component.classes()).toContain('disabled');
  });
});
