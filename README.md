# expense-manager

Sample App: Expense Manager

## Dependencies

* Node >= v8.x.x
* Npm >= v5.6.x
* Express >= v4.5.x

## Installation

```sh
$ git clone https://github.com/zand3rs/expense-manager.git
$ cd expense-manager
$ npm install
$ mysql -uroot < db/db.sql
```

## Usage

```sh
$ npm start
```

## API Endpoints

### Categories

#### `GET` /categories

List categories.

#### Request Headers

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **Content-Type**  |`string` | application/json |
| **Accept**  | `string` | application/json |


#### `GET` /categories/:id

Show category details.

#### Request Headers

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **Content-Type**  |`string` | application/json |
| **Accept**  | `string` | application/json |


#### `POST` /categories

Create category.

#### Request Headers

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **Content-Type**  |`string` | application/json |
| **Accept**  | `string` | application/json |

#### Request Body

Payload should be in JSON format.

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **title**  |`string` | Category title |
| **description**  | `string` | Category description |

#### `PUT` /categories/:id

Update category.

#### Request Headers

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **Content-Type**  |`string` | application/json |
| **Accept**  | `string` | application/json |

#### Request Body

Payload should be in JSON format.

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **title**  |`string` | Category title |
| **description**  | `string` | Category description |

#### `DELETE` /categories/:id

Delete a category.

#### Request Headers

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **Content-Type**  |`string` | application/json |
| **Accept**  | `string` | application/json |


### Expenses

#### `GET` /expenses

List expenses.

#### Request Headers

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **Content-Type**  |`string` | application/json |
| **Accept**  | `string` | application/json |


#### `GET` /expenses/:id

Show expense details.

#### Request Headers

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **Content-Type**  |`string` | application/json |
| **Accept**  | `string` | application/json |


#### `GET` /expenses/summary

Show expenses summary.

#### Request Headers

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **Content-Type**  |`string` | application/json |
| **Accept**  | `string` | application/json |


#### `GET` /categories/:category_id/expenses

List expenses under a specific category.

#### Request Headers

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **Content-Type**  |`string` | application/json |
| **Accept**  | `string` | application/json |


#### `POST` /expenses

Create expense.

#### Request Headers

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **Content-Type**  |`string` | application/json |
| **Accept**  | `string` | application/json |

#### Request Body

Payload should be in JSON format.

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **category_id**  |`integer` | Expense category (optional) |
| **title**  |`string` | Expense title |
| **amount**  | `decimal` | Expense amount |
| **transaction_date**  | `string` | Expense date |

#### `POST` /categories/:category_id/expenses

Create expense under a specific category.

#### Request Headers

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **Content-Type**  |`string` | application/json |
| **Accept**  | `string` | application/json |

#### Request Body

Payload should be in JSON format.

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **title**  |`string` | Expense title |
| **amount**  | `decimal` | Expense amount |
| **transaction_date**  | `string` | Expense date |

#### `PUT` /expenses/:id

Update expense.

#### Request Headers

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **Content-Type**  |`string` | application/json |
| **Accept**  | `string` | application/json |

#### Request Body

Payload should be in JSON format.

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **category_id**  |`integer` | Expense category |
| **title**  |`string` | Expense title |
| **amount**  | `decimal` | Expense amount |
| **transaction_date**  | `string` | Expense date |

#### `DELETE` /expenses/:id

Delete an expense record.

#### Request Headers

|Attribute  | Type  | Description |
|---------  | ---  | ----  | ----------- |
| **Content-Type**  |`string` | application/json |
| **Accept**  | `string` | application/json |


