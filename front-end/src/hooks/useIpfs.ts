import { toastError } from "../utils";

// Use Pinata for IPFS storage
// Get your API keys from https://app.pinata.cloud/developers/api-keys
const PINATA_API_KEY = "4fc622db6c0c5e079a5a";
const PINATA_SECRET_API_KEY = "82896bd4237d1f41f580f37f9d3c50b6ad14d621c78269632e570a74eb8851e8";

export const useIpfs = () => {
  const upload = async (data: any) => {
    try {
      // Prepare the data for upload
      let fileData;
      const metadata = {
        name: `Data_${Date.now()}`,
        keyvalues: {
          timestamp: Date.now()
        }
      };
      
      if (data instanceof File || data instanceof Blob) {
        fileData = data;
      } else {
        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        fileData = new File([blob], 'data.json', { type: 'application/json' });
      }

      // Create form data for upload
      const formData = new FormData();
      formData.append('file', fileData);
      formData.append('pinataMetadata', JSON.stringify(metadata));
      
      // Upload to Pinata using their API
      const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
        method: 'POST',
        headers: {
          'pinata_api_key': PINATA_API_KEY,
          'pinata_secret_api_key': PINATA_SECRET_API_KEY
        },
        body: formData
      });

      const result = await response.json();
      
      if (result.IpfsHash) {
        console.log("Pinata upload successful:", result);
        return { path: result.IpfsHash };
      } else {
        console.error("Pinata upload failed:", result);
        throw new Error("Failed to upload to Pinata");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toastError("Failed to upload");
    }
  };

  const getDataFromIpfs = async (path: string) => {
    try {
      // Try several IPFS gateways to ensure reliability
      const gateways = [
        `https://gateway.pinata.cloud/ipfs/${path}`,
        `https://ipfs.io/ipfs/${path}`,
        `https://dweb.link/ipfs/${path}`
      ];
      
      // Try each gateway until one works
      let data = null;
      let lastError = null;
   
      for (const gateway of gateways) {
        try {
          const response = await fetch(gateway);
          if (response.ok) {
            data = await response.json();
            break;
          }
        } catch (error) {
          lastError = error;
          continue;
        }
      }
      
      if (data) {
        return data;
      } else {
        console.error("Failed to retrieve from all gateways:", lastError);
        toastError("data not found");
        return "";
      }
    } catch (error) {
      console.error("Data retrieval error:", error);
      toastError("Failed to fetch data from IPFS");
    }
  };

  return {
    upload,
    getDataFromIpfs,
  };
};
