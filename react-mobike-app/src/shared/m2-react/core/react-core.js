import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'; // eslint-disable-line
import moment from 'moment';
import format from 'string-format';
import * as serviceWorker from './service-worker';
import { DataType, MESSAGE_TYPE, MESSAGE_POSITION } from '../../m2-core';

export class M2Component extends React.Component {
  constructor(props) {
    super(props);
    this.__componentInitialize();
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentInitialProps() {
    this.messageType = MESSAGE_TYPE;
    this.messagePosition = MESSAGE_POSITION;
    this.__validateRules = this.componentFormValidate();
  }

  componentInitialMethods() {
    this.getFieldDecorator = (field, options = {}) => {
      const validateConfig = {
        initialValue: DataType.defaultVal(options.defaultValue, ''),
        rules: this.__validateRules[field] || []
      };
      if (options.datetime) {
        validateConfig.initialValue = DataType.defaultVal(options.defaultValue, moment());
      }
      if (options.propName) {
        validateConfig.valuePropName = options.propName;
      }
      return this.props.form.getFieldDecorator(field, validateConfig);
    };
    this.getFieldValue = (field, form = null) => this.__getCurrentForm(form).getFieldValue(field);
    this.getFormValue = (form = null) => this.__getCurrentForm(form).getFieldsValue();
    this.setFieldValue = (field, value, form = null) => this.__getCurrentForm(form).setFieldsValue({[field]: value});
    this.resetForm = (form = null) => this.__getCurrentForm(form).resetFields();
    this.getSelectClass = (field, form = null) => {
      const fieldValue = this.getFieldValue(field, form);
      if (!fieldValue || DataType.isEmptyArray(fieldValue)) return '';
      return 'select-item-val';
    };
    this.validateForm = (options, e = null) => {
      e && e.preventDefault();
      const __ = {};
      if (DataType.isFunction(options)) {
        __.callback = options;
      } else if (DataType.isObject(options)) {
        __.callback = options.callback;
      }
      this.__getCurrentForm(options.form).validateFields((error, values) => {
        if (!error) {
          if (DataType.isFunction(__.callback)) {
            __.callback(values);
          }
        }
      })
    };
    this.getSelectedRows = () => {
      const { selectedRowKeys } = this.state;
      return {
        type: 'checkbox',
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedItems) => {
          this.setState({
            selectedRowKeys,
            selectedItems
          })
        }
      };
    };
    this.getSelectedRow = () => {
      const { selectedRowKeys } = this.state;
      return {
        type: 'radio',
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedItem) => {
          this.setState({
            selectedRowKeys,
            selectedItem
          })
        }
      }
    };
    this.handleSelectedRow = (row) => {
      return {
        onClick: () => {
          this.setState({
            selectedRowKeys: [row.key],
            selectedItem: row
          })
        }
      };
    };
    this.getSelectedIds = (keyField = 'id') => {
      return this.state.selectedItems && this.state.selectedItems.map(item => item[keyField]);
    };
    this.getSelectedId = (keyField = 'id') => {
      return this.state.selectedItem && (this.state.selectedItem[keyField] || this.state.selectedItem[0][keyField]);
    };
    this.getSelectedItem = () => {
      const selectedItem = this.state.selectedItem
      return DataType.isArray(selectedItem) ? selectedItem[0] : selectedItem
    };
    this.pagination = (data, callback, options = {}) => {
      return {
        current: data[options.pageIndexName || 'page_index'],
        pageSize: data[options.pageSizeName || 'page_size'],
        total: data[options.totalCountName || 'total_count'],
        onChange: (current) => callback(current),
        showTotal: () => `共${data[options.totalCountName || 'total_count']}条`
      }
    };
    this.__getCurrentForm = (form = null) => {
      return form ? form.props.form : this.props.form;
    };
  }

  componentInitialState() {
  }

  componentFormValidate() {
    return {};
  }

  __componentInitialize() {
    this.componentInitialProps();
    this.componentInitialMethods();
    this.componentInitialState();
  }
}

export function boot(app, options = {}) {
  if (!app && !app.component) {
    console.error('React根组件参数component尚未配置, 应用无法启动！');
    return;
  }

  // 注入string.format
  format && format.extend(String.prototype, {});

  ReactDOM.render(app.component || app, document.getElementById(app.root || 'root'));
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();
}

export function mapStateToProps(state) {
  return {
  }
}

export function mapDispatchToProps(dispatch) {
  return {
  }
}