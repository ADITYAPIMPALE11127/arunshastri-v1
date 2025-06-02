import React from 'react';

const LicensePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">License and Copyright Notice</h1>
      <p className="mb-4 text-blue-800">
        © 2025 ArunShashtri. All rights reserved.
      </p>
      <p className="mb-4 text-blue-800">
        This code and all associated files are the intellectual property of the copyright holder and are protected by copyright laws and international treaties.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-blue-900">License Terms</h2>
      <p className="mb-4 text-blue-800">
        This project is provided <strong>for review purposes only</strong>. It is <strong>not licensed for copying, distribution, modification, or use</strong> beyond personal evaluation and review.
      </p>
      <p className="mb-4 text-blue-800">
        Any unauthorized use, reproduction, distribution, or modification of this code, including but not limited to copying the project, deploying it, or using it in any commercial or non-commercial capacity without explicit written permission from the copyright holder, is strictly prohibited.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-blue-900">GitHub Repository Notice</h2>
      <p className="mb-4 text-blue-800">
        Although this project is hosted on GitHub, it is <strong>not an open-source project</strong> and is shared solely for review and evaluation. The repository and its contents must not be cloned, forked, copied, or used in any manner other than reviewing the code.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-blue-900">Enforcement</h2>
      <p className="mb-4 text-blue-800">
        Violations of these terms may result in legal action to protect the rights of the copyright holder.
      </p>
      <p className="text-blue-800">
        If you have any questions or require permission for use beyond review, please contact the copyright holder directly.
      </p>
    </div>
  );
};

export default LicensePage;
