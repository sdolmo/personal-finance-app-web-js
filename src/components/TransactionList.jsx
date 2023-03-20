import React from 'react'

export default function TransactionList () {
  return (
        <>
            <table>
                <caption>Transactions</caption>
                <thead>
                    <tr>
                        <th>Users</th>
                        <th>Symbol</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Note</th>
                        <th>Verified</th>
                    </tr>
                </thead>
                <tbody>
                    {/* This will be replaced by the Transaction conponent with transaction data coming from the API */}
                    {/* <Transaction /> */}
                    <tr>
                        <td>
                            {/* The image can be an Avatar component as seen here: https://beta.reactjs.org/learn/passing-props-to-a-component  */}
                            <img
                                src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
                                alt="user profile"
                                width={100}
                                height={100}
                            />
                        </td>
                        <td>LilCat</td>
                        <td>2023-02-28</td>
                        <td>7-Eleven</td>
                        <td>+$5.00</td>
                        <td>Shopping</td>
                        <td>Tuna fish</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>
                            {/* The image can be an Avatar component as seen here: https://beta.reactjs.org/learn/passing-props-to-a-component  */}
                            <img
                                src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
                                alt="user profile"
                                width={100}
                                height={100}
                            />
                        </td>
                        <td>LilCat</td>
                        <td>2023-02-28</td>
                        <td>7-Eleven</td>
                        <td>+$5.00</td>
                        <td>Shopping</td>
                        <td>Tuna fish</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>
                            {/* The image can be an Avatar component as seen here: https://beta.reactjs.org/learn/passing-props-to-a-component  */}
                            <img
                                src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
                                alt="user profile"
                                width={100}
                                height={100}
                            />
                        </td>
                        <td>LilCat</td>
                        <td>2023-02-28</td>
                        <td>7-Eleven</td>
                        <td>+$5.00</td>
                        <td>Shopping</td>
                        <td>Tuna fish</td>
                        <td>✔️</td>
                    </tr>
                </tbody>
            </table>
        </>
  )
}
