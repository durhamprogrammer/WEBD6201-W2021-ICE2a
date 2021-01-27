class Contact 
{
  // Constructor
  constructor(fullName, contactNumber, emailAddress) 
  {
    this.m_fullName = fullName;
    this.m_contactNumber = contactNumber;
    this.m_emailAddress = emailAddress;

    this.splitFullName();
  }

  // Getters and Setters
  get fullName() 
  {
    return this.m_fullName;
  }

  set fullName(full_name) 
  {
    this.m_fullName = full_name;
  }

  get contactNumber() 
  {
    return this.m_contactNumber;
  }

  set contactNumber(contact_number) 
  {
    this.m_contactNumber = contact_number;
  }

  get emailAddress() 
  {
    return this.m_emailAddress;
  }

  set emailAddress(email_address) 
  {
    this.m_emailAddress = email_address;
  }

  // functions
  splitFullName()
  {
    let names = this.fullName.split(" ")
    this.firstName = names[0];
    this.lastName = names[1];
  }

  toString()
  {
    let contactString = `Full Name     : ${this.fullName}
Contact Number: ${this.contactNumber}
Email Address : ${this.emailAddress}`;

    return contactString; 
  }
}