"use client"
import React, { useState } from 'react';
import signUp from '../../src/_functions/auth-signup'
import { Form, Input, Button, Upload, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, UploadOutlined } from '@ant-design/icons';
import styles from './page.module.scss';

interface RegistrationFormValues {
  given_name: string;
  phone_number: string
  family_name: string;
  email: string;
  username: string;
  password: string;
  profilePicture?: { file: File };
}

const RegistrationPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: RegistrationFormValues): Promise<void> => {
    setLoading(true);

    try {
      const { username, password, phone_number, email, given_name, family_name, profilePicture } = values;

      await signUp({
        username,
        password,
        phone_number,
        email,
        given_name,
        family_name,
      });

      // Optionally, you can upload the profile picture to your storage (e.g., S3)
      if (profilePicture && profilePicture.file) {
        // Upload profile picture logic here
        // Example: await uploadProfilePicture(username, profilePicture.file);
      }

      message.success('Registration successful! Please check your email to verify your account.');
    } catch (error) {
      console.error('Error registering user:', error);
      message.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const beforeUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    return false;
  };

  const [preview, setPreview] = useState<string | undefined>();

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 className = {styles.pageTitle}>Registrera</h2>
      <Form<RegistrationFormValues> onFinish={onFinish}>
        <Form.Item name="given_name" rules={[{ required: true, message: 'Please enter your given name' }]}>
          <Input prefix={<UserOutlined />} placeholder="Förenamn" />
        </Form.Item>
        <Form.Item name="family_name" rules={[{ required: true, message: 'Please enter your family name' }]}>
          <Input prefix={<UserOutlined />} placeholder="Efternamn" />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item name="username" rules={[{ required: true, message: 'Please enter a username' }]}>
          <Input prefix={<UserOutlined />} placeholder="Användarnamn" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please enter a password' }]}>
          <Input.Password prefix={<LockOutlined />} placeholder="Lösenord" />
        </Form.Item>
        <Form.Item name="profilePicture" valuePropName="file" getValueFromEvent={(e) => e.file}>
          <Upload
            maxCount={1}
            beforeUpload={beforeUpload}
            showUploadList={false}
            accept="image/*"
          >
            <Button icon={<UploadOutlined />} style={{ width: '100%' }}>
              Ladda upp profilbild
            </Button>
          </Upload>
        </Form.Item>
        {preview && (
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <img src={preview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
            Registrera
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationPage;
